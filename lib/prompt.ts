export function buildSocialPrompt({ platform, tone, objective }: { platform: string; tone: string; objective: string }) {
  return `Create a premium Indigo Airlines ${platform} campaign with a ${tone} tone. Focus on ${objective}, multi-platform optimization, and marketing-ready copy for social media.`;
}

export function buildBannerPrompt({ headline, offer }: { headline: string; offer: string }) {
  return `Generate a high-impact Indigo Airlines banner headline and supporting copy for ${offer}. Use luxury travel branding and convey confidence.`;
}

export function buildCommercialPrompt({ concept }: { concept: string }) {
  return `Write a cinematic aviation commercial concept for Indigo Airlines. Include scene structure, voiceover script, and visual ideas. Theme: ${concept}.`;
}
