"use client";
import Image from "next/image";
import Chat from "./components/Chat";
import { FormEvent, useEffect, useState } from "react";
export default function Home() {
  const [chatHistory, setChatHistory] = useState([""]);
  const [value, setValue] = useState("");
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
      {chatHistory.map((text, index) => {
        return <div>{text}</div>;
      })}
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
