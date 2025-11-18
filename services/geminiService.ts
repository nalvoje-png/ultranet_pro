
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

export const generateReferralMessage = async (
  referrerName: string,
  friendName: string
): Promise<string> => {
  if (!referrerName.trim() || !friendName.trim()) {
    return "Por favor, preencha seu nome e o nome do seu amigo para gerar uma mensagem.";
  }

  const prompt = `
    Crie uma mensagem curta, amigável e persuasiva em português do Brasil para ${referrerName} enviar para seu amigo(a) ${friendName}.
    A mensagem deve convidar ${friendName} para assinar a UltraNet, um provedor de internet de alta velocidade.
    Mencione que, se ${friendName} assinar, ${referrerName} ganhará um mês de internet grátis como agradecimento pela indicação.
    A mensagem deve ser casual e soar como se viesse de um amigo. Não use hashtags.
    Termine com uma saudação amigável de ${referrerName}.
  `;

  try {
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
    });
    
    if (response.text) {
        return response.text.trim();
    } else {
        throw new Error("A resposta da API estava vazia.");
    }

  } catch (error) {
    console.error("Error generating referral message:", error);
    return "Desculpe, não consegui gerar uma mensagem no momento. Tente novamente mais tarde.";
  }
};
