import OpenAI from "openai";

const azureOpenAiKey = process.env.AZURE_OPENAI_API_KEY ?? "";
const azureOpenAiEndpoint = process.env.AZURE_OPENAI_ENDPOINT ?? "";
const geminiKey = process.env.GEMINI_API_KEY ?? "";
const azureOpenAiDeployment = process.env.AZURE_OPENAI_DEPLOYMENT ?? "gpt-4o-mini";

export const openAiClient = new OpenAI({
  apiKey: azureOpenAiKey,
  baseURL: azureOpenAiEndpoint
});

export async function generateText(prompt: string) {
  if (!azureOpenAiKey || !azureOpenAiEndpoint) {
    throw new Error("Missing Azure OpenAI configuration.");
  }
  const response = await openAiClient.chat.completions.create({
    model: azureOpenAiDeployment,
    messages: [{ role: "user", content: prompt }],
    max_tokens: 300
  });
  return response.choices[0]?.message?.content ?? "";
}

export async function generateImage(prompt: string) {
  if (!geminiKey) {
    throw new Error("Missing GEMINI_API_KEY.");
  }
  const response = await fetch("https://gemini.googleapis.com/v1/images:generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${geminiKey}`
    },
    body: JSON.stringify({ prompt, size: "1024x1024" })
  });
  if (!response.ok) {
    throw new Error(`Gemini image generation failed: ${await response.text()}`);
  }
  const data = await response.json();
  return data?.data?.[0]?.uri ?? "";
}
