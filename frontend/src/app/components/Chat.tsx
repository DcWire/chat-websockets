import Image from "next/image";
import { useEffect, useState } from "react";
import arrow from "../../../public/arrow.svg";
import { FormEvent } from "react";

type ChatProps = { onSubmit: any; temp: boolean; value: string; setValue: any };

// This code controls the chat dialog box at the bottom of the screen
const Chat = ({ onSubmit, temp, value, setValue }: ChatProps) => {
  return (
    <div
      className="flex flex-col w-full bg-transparent p-4 pb-0"
      key={"chat-main"}
    >
      <div className="appearance-none w-full px-7 py-2 text-gray-700 border border-gray-300 rounded-full focus:outline-none focus:ring focus:ring-blue-500 relative">
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Ask me anything..."
            className="focus:outline-none w-11/12"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
          <button className="right-2 absolute text-white bg-transparent rounded-lg focus:outline-none w-6 h-6">
            <Image src={arrow} alt="Image of arrow head" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
