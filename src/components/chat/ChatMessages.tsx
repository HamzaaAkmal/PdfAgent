import React from 'react';
import Message from './Message';
import WelcomeMessage from './WelcomeMessage';

interface ChatMessagesProps {
  messages: Array<{ role: 'user' | 'assistant'; content: string }>;
}

export default function ChatMessages({ messages }: ChatMessagesProps) {
  if (messages.length === 0) {
    return <WelcomeMessage />;
  }

  return (
    <div className="flex-1 overflow-auto p-4 space-y-4">
      {messages.map((msg, idx) => (
        <Message key={idx} role={msg.role} content={msg.content} />
      ))}
    </div>
  );
}