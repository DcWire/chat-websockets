import Image from "next/image";
import Chat from "./components/Chat";
export default function Home() {
  return (
    <div>
      <div className="fixed w-2/4 bottom-0">
        <Chat />
      </div>
    </div>
  );
}
