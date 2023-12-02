"use client";
import { useState, useEffect } from "react";
import { useChat } from "ai/react";

export default function Page() {
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    setMessages,
    isLoading,
  } = useChat();
  const [essay, setEssay] = useState("");
  const showInput = messages.length === 0;
  const showResponse = messages.length >= 2;

  // Save user's essay
  useEffect(() => {
    if (input !== "") {
      setEssay(input);
    }
  }, [input, essay]);

  const resetHandler = () => {
    setMessages([]);
  };

  return (
    <>
      <div className="container mx-auto h-full">
        {showResponse && (
          <div className="flex flex-col overflow-auto">
            <h3 className="my-4  text-xl font-semibold">Assessment Result</h3>
            <p className="whitespace-pre-line">{messages[1]?.content}</p>

            <h3 className="my-4  text-xl font-semibold">Your Essay</h3>
            <p className="whitespace-pre-line">{essay}</p>

            <button
              onClick={resetHandler}
              className="mt-4 rounded-md bg-rose-300 p-2 text-sky-950"
              disabled={isLoading}
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
              <form
                onSubmit={handleSubmit}
                className="mt-2 flex flex-col gap-3"
              >
                <textarea
                  minLength={150}
                  rows={12}
                  value={input}
                  onChange={handleInputChange}
                  spellCheck={false}
                  className="mr-2 w-full flex-grow rounded-md border border-none bg-white/20 p-2"
                />
                <button
                  type="submit"
                  className="rounded-md bg-rose-300 p-2 text-sky-950"
                >
                  Send
                </button>
              </form>
            </label>
          </div>
        )}
      </div>
    </>
  );
}
