
import { GoogleGenAI, Type } from "@google/genai";
import { MENU_ITEMS } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getBaristaRecommendation = async (mood: string): Promise<string> => {
  const menuContext = MENU_ITEMS.map(item => `${item.name} (${item.category}): ${item.description}`).join('\n');
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are a friendly, expert barista at Morning Brew Café. 
      A customer is feeling: "${mood}".
      Based on their mood, recommend ONE item from our menu below. 
      Explain why it's the perfect choice for them. 
      Keep it brief, warm, and professional.

      Our Menu:
      ${menuContext}`,
      config: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
      }
    });

    return response.text || "I'd suggest our signature Morning Brew Blend! It's the perfect way to start any day.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having a quick coffee break! Try our Morning Brew Blend, it's a customer favorite.";
  }
};
