import React from 'react';
import Navbar from './components/Navbar';
import Features from './components/Features';
import PDFPlayground from './components/PDFPlayground';
import ThreeBackground from './components/ThreeBackground';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <ThreeBackground />
      <Navbar />
      <main>
        <section id="playground" className="relative">
          <PDFPlayground />
        </section>
        <Features />
      </main>
      <Footer />
    </div>
  );
}

export default App;