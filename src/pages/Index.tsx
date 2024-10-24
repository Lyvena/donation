import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Gift, DollarSign, CheckCircle } from 'lucide-react';
import DonationForm from '@/components/DonationForm';
import RecommendationList from '@/components/RecommendationList';
import Logo from '@/components/Logo';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const Index = () => {
  const [preferences, setPreferences] = useState({});

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <header className="bg-white shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Logo />
          <nav className="flex gap-4">
            <Link to="/"><Button variant="ghost">Home</Button></Link>
            <Link to="/about"><Button variant="ghost">About</Button></Link>
            <Link to="/contact"><Button variant="ghost">Contact</Button></Link>
            <Link to="/settings"><Button variant="ghost">Settings</Button></Link>
            <Link to="/signup"><Button>Sign Up</Button></Link>
          </nav>
        </div>
      </header>
      
      <main className="container mx-auto mt-8 px-4">
        <motion.section 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">AI-Powered Donation Recommendations</h2>
          <p className="text-xl text-gray-600 mb-8">Let our AI help you find the perfect causes to support.</p>
          <div className="flex flex-wrap justify-center gap-8">
            <motion.div 
              className="flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
            >
              <Heart className="w-12 h-12 text-red-500 mb-2" />
              <span className="text-sm font-medium">Support Causes</span>
            </motion.div>
            <motion.div 
              className="flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
            >
              <Gift className="w-12 h-12 text-green-500 mb-2" />
              <span className="text-sm font-medium">Make a Difference</span>
            </motion.div>
            <motion.div 
              className="flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
            >
              <DollarSign className="w-12 h-12 text-yellow-500 mb-2" />
              <span className="text-sm font-medium">Efficient Giving</span>
            </motion.div>
            <motion.div 
              className="flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
            >
              <CheckCircle className="w-12 h-12 text-blue-500 mb-2" />
              <span className="text-sm font-medium">Verified Charities</span>
            </motion.div>
          </div>
        </motion.section>
        
        <div className="grid md:grid-cols-2 gap-8">
          <DonationForm onPreferencesChange={setPreferences} />
          <RecommendationList preferences={preferences} />
        </div>
      </main>
      
      <footer className="bg-gray-100 mt-16 py-8">
        <div className="container mx-auto text-center text-gray-600">
          <p>
            © 2024 <a href="https://lyvena.xyz/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Lyvena.</a> All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;