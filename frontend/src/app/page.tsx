import Image from "next/image";
import Chat from "./components/Chat";
export default function Home() {
  return (
    <div>
      <div className="fixed w-2/4 bottom-0">
        <Chat />
        <div className="mt-4 text-gray-500 text-sm text-center pb-1">
          {Math.random() > 0.5
            ? "Feeling curious, ask me anything!"
            : "Ready to answer your questions with my best wit!"}
        </div>
      </div>
    </div>
  );
}
