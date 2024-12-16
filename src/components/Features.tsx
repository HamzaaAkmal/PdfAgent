import React from 'react';
import { Brain, Zap, Lock, Search, FileText, MessageSquare } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Advanced AI Analysis',
    description: 'Powered by Google\'s Gemini AI for deep document understanding and accurate responses'
  },
  {
    icon: Zap,
    title: 'Real-time Processing',
    description: 'Get instant answers to your questions with lightning-fast document processing'
  },
  {
    icon: Lock,
    title: 'Secure & Private',
    description: 'Your documents are encrypted and processed securely, ensuring complete privacy'
  },
  {
    icon: Search,
    title: 'Smart Search',
    description: 'Quickly find specific information within your documents using natural language'
  },
  {
    icon: FileText,
    title: 'Multiple File Support',
    description: 'Upload and analyze multiple PDFs simultaneously for comprehensive research'
  },
  {
    icon: MessageSquare,
    title: 'Natural Conversations',
    description: 'Engage in natural dialogue about your documents with context-aware responses'
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Powerful Features for Document Analysis
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our AI-powered PDF agent combines cutting-edge technology with intuitive design
            to transform how you interact with your documents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <feature.icon className="w-10 h-10 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}