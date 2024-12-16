import React from 'react';
import { Send, Loader2 } from 'lucide-react';

interface MessageInputProps {
  message: string;
  setMessage: (message: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  isProcessing: boolean;
}

export default function MessageInput({ 
  message, 
  setMessage, 
  onSubmit,
  isProcessing 
}: MessageInputProps) {
  return (
    <form onSubmit={onSubmit} className="flex gap-4">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Ask a question about your PDF..."
        className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
        disabled={isProcessing}
      />
      <button
        type="submit"
        className={`bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2 ${
          isProcessing ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        disabled={isProcessing}
      >
        {isProcessing ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <Send className="w-4 h-4" />
        )}
        {isProcessing ? 'Processing...' : 'Send'}
      </button>
    </form>
  );
}