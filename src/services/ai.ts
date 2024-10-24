import OpenAI from 'openai';

export const getAIRecommendations = async (preferences: {
  amount: number;
  interests: string;
  location: string;
  additionalInfo: string;
}) => {
  const apiKey = localStorage.getItem('openai_api_key');
  if (!apiKey) {
    throw new Error('OpenAI API key not found. Please add it in settings.');
  }

  const openai = new OpenAI({ apiKey, dangerouslyAllowBrowser: true });

  const prompt = `Based on the following preferences, suggest 3 charitable organizations:
    - Donation amount: $${preferences.amount}
    - Interests: ${preferences.interests}
    - Location: ${preferences.location}
    - Additional information: ${preferences.additionalInfo}
    
    Format the response as a JSON array with objects containing:
    - name: organization name
    - description: brief description
    - impact: potential impact of donation`;

  const completion = await openai.chat.completions.create({
    messages: [{ role: "user", content: prompt }],
    model: "gpt-3.5-turbo",
  });

  return JSON.parse(completion.choices[0].message.content || '[]');
};