import React from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const DonationForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Donation Preferences</CardTitle>
        <CardDescription>Tell us about your donation interests</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="amount">Donation Amount</Label>
              <Input id="amount" placeholder="Enter amount" type="number" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="interests">Interests</Label>
              <Input id="interests" placeholder="e.g., Education, Environment" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="location">Preferred Location</Label>
              <Input id="location" placeholder="e.g., Global, Local, Specific country" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="additional-info">Additional Information</Label>
              <Textarea id="additional-info" placeholder="Any other preferences or requirements" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button type="submit" className="w-full">Get Recommendations</Button>
      </CardFooter>
    </Card>
  );
};

export default DonationForm;