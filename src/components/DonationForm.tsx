import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"

const DonationForm = ({ onPreferencesChange }: { onPreferencesChange: (prefs: any) => void }) => {
  const [preferences, setPreferences] = useState({
    amount: '',
    interests: '',
    location: '',
    additionalInfo: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    const newPreferences = { ...preferences, [id]: value };
    setPreferences(newPreferences);
    onPreferencesChange(newPreferences);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card>
        <CardHeader>
          <CardTitle>Donation Preferences</CardTitle>
          <CardDescription>Tell us about your donation interests</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="amount">Donation Amount</Label>
              <Input
                id="amount"
                type="number"
                placeholder="Enter amount"
                value={preferences.amount}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="interests">Interests</Label>
              <Input
                id="interests"
                placeholder="e.g., Education, Environment"
                value={preferences.interests}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Preferred Location</Label>
              <Input
                id="location"
                placeholder="e.g., Global, Local, Specific country"
                value={preferences.location}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="additionalInfo">Additional Information</Label>
              <Textarea
                id="additionalInfo"
                placeholder="Any other preferences or requirements"
                value={preferences.additionalInfo}
                onChange={handleChange}
              />
            </div>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default DonationForm;