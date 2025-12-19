
import { GoogleGenAI, Type } from "@google/genai";
import { StoryResult } from "../types";

// Generates a compelling brand story hook using Gemini API
export const generateBrandStory = async (niche: string, targetAudience: string): Promise<StoryResult> => {
  // Use named parameter and direct process.env.API_KEY as per guidelines
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Generate a compelling social media "Brand Story" hook for a business in the ${niche} niche targeting ${targetAudience} in South Africa. The tone should be professional yet warm (baby pink/cream white vibe). Include a headline, a story body, and 3 localized South African hashtags.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          headline: { type: Type.STRING },
          body: { type: Type.STRING },
          hashtags: { 
            type: Type.ARRAY,
            items: { type: Type.STRING }
          }
        },
        required: ["headline", "body", "hashtags"]
      }
    }
  });

  // Access text directly and trim whitespace
  const jsonStr = response.text.trim();
  return JSON.parse(jsonStr);
};