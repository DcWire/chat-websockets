"use client";
import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";

// Components
import Chat from "./components/Chat";
import ChatMessages from "./components/ChatMessages";

export default function Home() {
  const [chatHistory, setChatHistory] = useState([""]);
  const [value, setValue] = useState("");

  // When clicking Clear Chat button
  const onClick = (event: any) => {
    event.preventDefault();
    localStorage.setItem("chat-history", JSON.stringify([]));
    setChatHistory([]);
  };
  // When pressing enter on chat
  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    const historySTRING = localStorage.getItem("chat-history");
    if (historySTRING) {
      const history = JSON.parse(historySTRING);
      history.push(value);
      localStorage.setItem("chat-history", JSON.stringify(history));
      setChatHistory(history);
    } else {
      localStorage.setItem("chat-history", JSON.stringify([value]));
      setChatHistory([value]);
    }
    setValue("");
  };

  useEffect(() => {
    const historySTRING = localStorage.getItem("chat-history");
    if (historySTRING) {
      const history = JSON.parse(historySTRING);
      setChatHistory(history);
    }
  }, []);

  return (
    <div>
      <div className="pt-4">
        <button
          className="absolute bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          style={{ left: "46%" }}
          onClick={onClick}
        >
          Clear Chat
        </button>
      </div>

      <div className="p-10 pb-20 pt-10">
        <ChatMessages data={chatHistory} />
      </div>
      <div className="fixed w-2/4 bottom-0">
        <Chat
          key={"chat"}
          temp={false}
          onSubmit={onSubmit}
          value={value}
          setValue={setValue}
        />
        <div className="mt-4 text-gray-500 text-sm text-center pb-1">
          {/* {Math.random() > 0.5
            ? "Feeling curious, ask me anything!"
            : "Ready to answer your questions with my best wit!"} */}
        </div>
      </div>
    </div>
  );
}
