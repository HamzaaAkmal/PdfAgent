import React, { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import ChatMessages from './chat/ChatMessages';
import FileUpload from './chat/FileUpload';
import MessageInput from './chat/MessageInput';
import { generateResponse } from '../lib/gemini';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function PDFPlayground() {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState<Message[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || isProcessing) return;

    const userMessage = message.trim();
    setMessage('');
    setChat(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsProcessing(true);

    try {
      const response = await generateResponse(userMessage);
      setChat(prev => [...prev, { role: 'assistant', content: response }]);
    } catch (error) {
      toast.error('Failed to generate response. Please try again.');
      console.error('Error:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] max-w-6xl mx-auto px-4">
      <Toaster position="top-center" />
      <ChatMessages messages={chat} />
      <div className="border-t p-4 space-y-4">
        <FileUpload />
        <MessageInput 
          message={message}
          setMessage={setMessage}
          onSubmit={handleSubmit}
          isProcessing={isProcessing}
        />
      </div>
    </div>
  );
}