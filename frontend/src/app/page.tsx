"use client";
import Chat from "./components/Chat";
import { FormEvent, useEffect, useState } from "react";
import ChatMessages from "./components/ChatMessages";

// Api functions to post chatmessage request
import chatmessage from "./api/chatmessage";
import useApi from "./api/useApi";

export default function Home() {
  // Declaring state variable chatHistory to store messages in an ARRAY of strings
  // SetChatHistory a function that updates the chatHistory whenever new message is added.
  const [chatHistory, setChatHistory] = useState([["", 0]]);
  const [value, setValue] = useState("");

  const createNewChatmessage = useApi(chatmessage.createNewChatmessage);

  // When clicking Clear Chat button
  const onClick = (event: any) => {
    event.preventDefault();
    localStorage.setItem("chat-history", JSON.stringify([]));
    setChatHistory([]);
  };

  // When pressing enter on chat
  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const tempValue = value;
    //clears the input field for next value
    setValue("");

    // Retrieves chat-history from session storage and stores in historySTRING variable
    const historySTRING = localStorage.getItem("chat-history");

    // If historySTRING exists ;
    if (historySTRING) {
      const history = JSON.parse(historySTRING);
      if (tempValue.trim() != "") {
        // push the current input value {from user} to history if not empty
        history.push([tempValue, 0]);
      }
      // Sets the local storage with updated value, uses stringify to convert array back to JSON string
      localStorage.setItem("chat-history", JSON.stringify(history));

      // Updates the chatHistory state to reflect the stored messages.
      setChatHistory(history);
    } else {
      localStorage.setItem("chat-history", JSON.stringify([[tempValue, 0]]));
      setChatHistory([[tempValue, 0]]);
    }

    await createNewChatmessage.request(value);
  };

  useEffect(() => {
    const historySTRING = localStorage.getItem("chat-history");
    if (historySTRING) {
      const history = JSON.parse(historySTRING);
      history.push([createNewChatmessage.data, 1]);
      localStorage.setItem("chat-history", JSON.stringify(history));
      setChatHistory(history);
    }
  }, [createNewChatmessage.data]);

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
          {/*Math.random() > 0.5
            ? "Feeling curious, ask me anything!"
            : "Ready to answer your questions with my best wit!"*/}
        </div>
      </div>
    </div>
  );
}
