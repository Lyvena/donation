import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings as SettingsIcon } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import Logo from '@/components/Logo';
import { Link } from 'react-router-dom';

const Settings = () => {
  const [apiKey, setApiKey] = useState('');
  const { toast } = useToast();

  const handleSaveApiKey = () => {
    localStorage.setItem('openai_api_key', apiKey);
    toast({
      title: "API Key Saved",
      description: "Your OpenAI API key has been saved successfully.",
    });
  };

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
          </nav>
        </div>
      </header>

      <main className="container mx-auto mt-8 px-4">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <div className="flex items-center gap-2">
              <SettingsIcon className="w-6 h-6" />
              <CardTitle>AI Settings</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">OpenAI API Key</label>
              <Input
                type="password"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="Enter your OpenAI API key"
              />
              <p className="text-sm text-gray-500">
                Your API key is stored locally and never sent to our servers.
              </p>
            </div>
            <Button onClick={handleSaveApiKey}>Save API Key</Button>
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

export default Settings;