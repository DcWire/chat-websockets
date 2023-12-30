import Image from "next/image";
import arrow from "../../../public/arrow.svg";
export default function Chat() {
  return (
    <div className="flex flex-col w-full bg-transparent p-4">
      <div className="appearance-none w-full p-2 text-gray-700 border border-gray-300 rounded-full focus:outline-none focus:ring focus:ring-blue-500 relative">
        <form>
          <input
            type="text"
            placeholder="Ask me anything..."
            className="focus:outline-none w-11/12"
          />
          <button className="right-0.5 absolute text-white bg-transparent hover:bg-blue-600 rounded-lg focus:outline-none w-6 h-6">
            <Image src={arrow} alt="Image of arrow head" />
          </button>
        </form>
      </div>
      <div className="mt-4 text-gray-500 text-sm text-center">
        {Math.random() > 0.5
          ? "Feeling curious, ask me anything!"
          : "Ready to answer your questions with my best wit!"}
      </div>
    </div>
  );
}
