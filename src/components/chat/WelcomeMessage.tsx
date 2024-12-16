import React from 'react';
import { Bot } from 'lucide-react';

export default function WelcomeMessage() {
  return (
    <div className="text-center space-y-6 mt-20">
      <div className="flex justify-center">
        <Bot className="w-16 h-16 text-purple-600" />
      </div>
      <h2 className="text-2xl font-bold text-gray-800">
        Upload your PDF and start asking questions
      </h2>
      <p className="text-gray-600 max-w-xl mx-auto">
        Our AI agent will analyze your document and provide detailed answers to your questions
      </p>
    </div>
  );
}