"use client";
import { useState } from "react";

import { getPrompt } from "./prompt";
import Loading from "~/app/components/loading";

export default function Page() {
  const [input, setInput] = useState<string>("");
  const [response, setResponse] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const showInput = response.length === 0 && !loading;
  const showResponse = response.length > 0 && !loading;
  const sendMessage = async () => {
    if (input.trim() === "") return;
    const inputWordCount = input.split(" ").length;
    const prompt = getPrompt(input, inputWordCount);
    setLoading(true);

    try {
      const response = await fetch("/api/openai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: prompt,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = (await response.json()) as string[];
      setResponse(responseData);
      setLoading(false);
    } catch (error) {
      console.error("Error sending message to AI:", error);
    }
  };

  const resetHandler = () => {
    setResponse([]);
    setInput("");
  };

  return (
    <>
      <div className="container mx-auto h-full">
        {loading && <Loading />}
        {showResponse && (
          <div className="flex flex-col overflow-auto">
            <h3 className="my-4  text-xl font-semibold">Assessment Result</h3>
            <p className="whitespace-pre-line">{response[0]}</p>
            <h3 className="my-4  text-xl font-semibold">Your Essay</h3>
            <p className="whitespace-pre-line">{input}</p>
            <h3 className="my-4  text-xl font-semibold">
              How to revise your essay
            </h3>
            <p className="whitespace-pre-line">{response[1]}</p>
            <button
              onClick={resetHandler}
              className="mt-4 rounded-md bg-rose-300 p-2 text-sky-950"
            >
              Try another essay
            </button>
          </div>
        )}
        {showInput && (
          <div className="mb-4">
            <label>
              Please input your essay
              <br />
              <div className="mt-2 flex flex-col gap-3">
                <textarea
                  minLength={150}
                  rows={12}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                  spellCheck={false}
                  className="mr-2 w-full flex-grow rounded-md border border-none bg-white/20 p-2"
                />
                <button
                  onClick={sendMessage}
                  className="rounded-md bg-rose-300 p-2 text-sky-950"
                >
                  Send
                </button>
              </div>
            </label>
          </div>
        )}
      </div>
    </>
  );
}
