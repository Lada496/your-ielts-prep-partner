import OpenAI from "openai";

import { env } from "~/env";

export const runtime = "edge";

const openai = new OpenAI({
  apiKey: env.OPEN_AI_API_KEY,
});

export async function POST(req: Request) {
  const { messages } = await req.json();

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages,
  });

  const response2 = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      ...messages,
      {
        role: "assistant",
        content: response.choices[0].message.content,
      },
      {
        role: "user",
        content:
          "Please provide a revised essay with more than 150 and less than 170 words to get a one-level higher band score (For example, give a revised essay with a score of 8.0 if your score estimation of the original essay is 7.0). Only replay your essay.",
      },
    ],
  });

  return Response.json([
    response.choices[0].message.content,
    response2.choices[0].message.content,
  ]);
}
