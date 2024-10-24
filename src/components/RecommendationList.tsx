import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useToast } from "@/components/ui/use-toast"
import { getAIRecommendations } from '@/services/ai';

interface Recommendation {
  name: string;
  description: string;
  impact: string;
}

const RecommendationList = ({ preferences }: { preferences: any }) => {
  const [recommendations, setRecommendations] = React.useState<Recommendation[]>([]);
  const [loading, setLoading] = React.useState(false);
  const { toast } = useToast();

  const getRecommendations = async () => {
    try {
      setLoading(true);
      const results = await getAIRecommendations(preferences);
      setRecommendations(results);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>AI-Powered Recommendations</CardTitle>
        <CardDescription>Personalized charity suggestions based on your preferences</CardDescription>
      </CardHeader>
      <CardContent>
        <Button 
          onClick={getRecommendations} 
          className="w-full mb-4"
          disabled={loading}
        >
          {loading ? "Generating..." : "Get AI Recommendations"}
        </Button>
        <ul className="space-y-4">
          {recommendations.map((charity, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-4 rounded-lg shadow"
            >
              <h3 className="font-semibold text-lg">{charity.name}</h3>
              <p className="text-gray-600 mt-1">{charity.description}</p>
              <p className="text-sm text-blue-600 mt-2">Impact: {charity.impact}</p>
              <Button variant="outline" className="mt-2">Learn More</Button>
            </motion.li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default RecommendationList;