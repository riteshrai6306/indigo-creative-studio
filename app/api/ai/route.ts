import { NextResponse } from "next/server";
import { generateText, generateImage } from "@/lib/aiClient";

export async function POST(request: Request) {
  const body = await request.json();
  const { type, prompt } = body;

  try {
    if (type === "text") {
      const result = await generateText(prompt);
      return NextResponse.json({ result });
    }

    if (type === "image") {
      const result = await generateImage(prompt);
      return NextResponse.json({ result });
    }

    return NextResponse.json({ error: "Unsupported type" }, { status: 400 });
  } catch (error) {
    return NextResponse.json({ error: "AI request failed" }, { status: 500 });
  }
}
