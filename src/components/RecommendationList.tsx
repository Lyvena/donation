import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const RecommendationList = () => {
  // TODO: Implement actual recommendation logic
  const recommendations = [
    { id: 1, name: 'Global Education Fund', description: 'Supporting education initiatives worldwide' },
    { id: 2, name: 'Clean Ocean Project', description: 'Working to reduce ocean pollution' },
    { id: 3, name: 'Local Food Bank', description: 'Providing meals to those in need in your community' },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recommended Charities</CardTitle>
        <CardDescription>Based on your preferences</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {recommendations.map((charity) => (
            <li key={charity.id} className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold text-lg">{charity.name}</h3>
              <p className="text-gray-600 mt-1">{charity.description}</p>
              <Button variant="outline" className="mt-2">Learn More</Button>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default RecommendationList;