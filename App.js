
import React, { useState } from 'react';
import './index.css';
import { Navbar } from './components/ui/Navbar';
import { HeroSection } from './components/ui/HeroSection';
import { FeaturesSection } from './components/ui/FeaturesSection';
import { Testimonials } from './components/ui/Testimonials';
import { PricingTable } from './components/ui/PricingTable';
import { Footer } from './components/ui/Footer';

function App() {
  const [topic, setTopic] = useState('');
  const [generatedContent, setGeneratedContent] = useState('');
  const [loading, setLoading] = useState(false);

  const generateContent = () => {
    setLoading(true);
    setTimeout(() => {
      setGeneratedContent(`Here is an AI-generated blog post about ${topic}. This content is optimized for engagement and SEO.`);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="font-sans bg-gradient-to-b from-blue-900 to-blue-600 text-white min-h-screen">
      <Navbar />
      <HeroSection />
      <div className="flex flex-col items-center justify-center py-12 px-4">
        <div className="bg-white text-gray-900 p-8 rounded-2xl shadow-lg w-full max-w-2xl">
          <h2 className="text-2xl font-bold mb-4 text-center">Generate AI-Powered Content</h2>
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Enter a topic..."
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />
          <button
            onClick={generateContent}
            disabled={!topic || loading}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            {loading ? 'Generating...' : 'Generate Content'}
          </button>
          {generatedContent && (
            <div className="mt-4 p-4 bg-gray-100 rounded border text-gray-800">
              {generatedContent}
            </div>
          )}
        </div>
      </div>
      <FeaturesSection />
      <Testimonials />
      <div className="w-full max-w-4xl mx-auto py-16" id="pricing">
        <h2 className="text-4xl font-bold text-center mb-8">Pricing Plans</h2>
        <PricingTable />
      </div>
      <Footer />
    </div>
  );
}

export default App;
