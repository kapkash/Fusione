import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { createChatSession } from '../services/geminiService';
import { ChatMessage } from '../types';
import { Chat } from '@google/genai';

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: "Alright mate? I'm Fiber. I can help you pick a package or just have a natter about internet speeds. What's on your mind?",
      timestamp: new Date(),
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const chatSessionRef = useRef<Chat | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen && !chatSessionRef.current) {
      chatSessionRef.current = createChatSession();
    }
    scrollToBottom();
  }, [isOpen, messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      if (!chatSessionRef.current) {
         chatSessionRef.current = createChatSession();
      }

      if (chatSessionRef.current) {
        const result = await chatSessionRef.current.sendMessage({ message: userMsg.text });
        const responseText = result.text;

        const botMsg: ChatMessage = {
          id: (Date.now() + 1).toString(),
          role: 'model',
          text: responseText || "Sorry, my brain just buffered. Can you say that again?",
          timestamp: new Date(),
        };
        setMessages(prev => [...prev, botMsg]);
      } else {
         const fallbackMsg: ChatMessage = {
            id: (Date.now() + 1).toString(),
            role: 'model',
            text: "I'm having a bit of a wobble (API Key missing). Call the team instead.",
            timestamp: new Date(),
         };
         setMessages(prev => [...prev, fallbackMsg]);
      }

    } catch (error) {
      console.error("Chat error", error);
      const errorMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: "Gremlins in the system. Try again in a tick.",
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      {/* Toggle Button */}
      {!isOpen && (
        <button
          aria-label="Open Chat"
          onClick={() => setIsOpen(true)}
          className="bg-fusione-black text-fusione-yellow p-4 rounded-2xl shadow-neo transition-all hover:-translate-y-1 hover:shadow-neo-hover flex items-center justify-center group border-2 border-white"
        >
          <MessageCircle size={32} strokeWidth={2.5} className="group-hover:rotate-12 transition-transform" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white w-[350px] md:w-[400px] h-[600px] rounded-2xl shadow-neo-lg flex flex-col border-2 border-fusione-black overflow-hidden animate-fade-in-up relative">
          
          {/* Header */}
          <div className="bg-fusione-black p-4 flex justify-between items-center text-white border-b-2 border-fusione-black">
            <div className="flex items-center gap-3">
              <div className="bg-fusione-yellow p-1.5 rounded-lg border-2 border-white text-fusione-black shadow-neo-sm">
                <Bot size={20} strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg leading-tight text-white">Fiber</h3>
                <p className="text-xs text-gray-400 flex items-center gap-1.5 font-bold uppercase tracking-wider">
                  <span className="w-2 h-2 bg-green-400 rounded-full border border-black"></span> Online
                </p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 p-1.5 rounded-lg transition-colors border-2 border-transparent hover:border-white"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-fusione-cream scrollbar-hide">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
              >
                <div className={`w-8 h-8 rounded-lg border-2 border-fusione-black flex items-center justify-center flex-shrink-0 mt-auto shadow-sm ${
                    msg.role === 'user' ? 'bg-fusione-black text-white' : 'bg-fusione-yellow text-fusione-black'
                }`}>
                  {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                </div>
                <div
                  className={`max-w-[80%] rounded-xl p-3 text-sm font-bold leading-relaxed border-2 border-fusione-black shadow-neo-sm ${
                    msg.role === 'user'
                      ? 'bg-white text-fusione-black rounded-br-none'
                      : 'bg-white text-fusione-black rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
               <div className="flex gap-2">
                 <div className="w-8 h-8 rounded-lg border-2 border-fusione-black bg-fusione-yellow text-fusione-black flex items-center justify-center flex-shrink-0 mt-auto shadow-sm">
                    <Bot size={16} />
                 </div>
                 <div className="bg-white border-2 border-fusione-black rounded-xl rounded-bl-none p-4 shadow-neo-sm">
                    <div className="flex space-x-1.5">
                        <div className="w-2 h-2 bg-fusione-black rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                        <div className="w-2 h-2 bg-fusione-black rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                        <div className="w-2 h-2 bg-fusione-black rounded-full animate-bounce"></div>
                    </div>
                 </div>
               </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSubmit} className="p-4 bg-white border-t-2 border-fusione-black">
            <div className="relative flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type away..."
                className="w-full pl-4 pr-12 py-3 bg-gray-50 border-2 border-fusione-black rounded-xl text-sm font-bold focus:outline-none focus:bg-white focus:shadow-neo-sm transition-all placeholder:text-gray-400 text-fusione-black"
              />
              <button 
                type="submit"
                disabled={!input.trim() || isLoading}
                className="absolute right-2 bg-fusione-black hover:bg-fusione-yellow hover:text-fusione-black disabled:bg-gray-300 disabled:text-gray-500 disabled:border-gray-300 text-white p-2 rounded-lg transition-colors border-2 border-transparent"
              >
                <Send size={16} strokeWidth={3} />
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};