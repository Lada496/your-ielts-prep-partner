import { env } from "~/env";

import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";
import { getPrompt } from "./prompt";

export const runtime = "edge";

const openai = new OpenAI({
  apiKey: env.OPEN_AI_API_KEY,
});

export async function POST(req: Request) {
  const { messages } = (await req.json()) as {
    messages: Array<{ role: "user" | "assistant"; content: string }>;
  };

  if (!messages[0]) {
    return new Response("Invelid input", {
      status: 400,
    });
  }

  const _messages = getPrompt(
    messages[0].content,
    messages[0].content.split(" ").length, // word count
  );

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    stream: true,
    messages: _messages,
  });

  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);
  // Respond with the stream
  return new StreamingTextResponse(stream);
}
