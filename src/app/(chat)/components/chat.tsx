"use client";
import { useState } from "react";

const Chat = ({ defaultMessages = [] }: { defaultMessages?: string[] }) => {
  const [messages, setMessages] = useState<string[]>(defaultMessages);
  const [input, setInput] = useState<string>("");

  const sendMessage = async () => {
    if (input.trim() === "") return;

    const newMessage = `You: ${input}`;
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setInput("");

    try {
      const response = await fetch("/api/openai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: [...messages, newMessage] }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();
      const aiResponse = responseData.message;
      setMessages((prevMessages) => [...prevMessages, `AI: ${aiResponse}`]);
    } catch (error) {
      console.error("Error sending message to AI:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <div className="h-48 overflow-y-auto border border-gray-300 p-4">
          {messages.map((message, index) => (
            <div key={index} className="mb-2">
              {message}
            </div>
          ))}
        </div>
        <div className="mt-2 flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            className="mr-2 flex-grow border p-2 text-black"
          />
          <button onClick={sendMessage} className="bg-blue-500 p-2 text-white">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
