import React from 'react';

export interface Plan {
  id: string;
  name: string;
  speedDown: number;
  speedUp: number;
  price: number;
  features: string[];
  isPopular?: boolean;
  description: string;
  dataLimit: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}