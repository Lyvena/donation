import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail } from 'lucide-react';
import Logo from '@/components/Logo';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <header className="bg-white shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Logo />
          <nav className="flex gap-4">
            <Link to="/"><Button variant="ghost">Home</Button></Link>
            <Link to="/about"><Button variant="ghost">About</Button></Link>
            <Link to="/contact"><Button variant="ghost">Contact</Button></Link>
            <Link to="/signup"><Button>Sign Up</Button></Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto mt-8 px-4">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">Contact Us</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-center gap-2 text-xl">
              <Mail className="w-6 h-6" />
              <a href="mailto:info@lyvena.xyz" className="text-blue-600 hover:underline">
                info@lyvena.xyz
              </a>
            </div>
            <p className="text-center text-gray-600">
              We'd love to hear from you! Feel free to reach out with any questions about our donation matching service.
            </p>
          </CardContent>
        </Card>
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

export default Contact;