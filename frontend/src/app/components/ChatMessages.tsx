type ChatMessagesProps = { data: Array<String> };
export default function ChatMessages({ data }: ChatMessagesProps) {
  return (
    <div style={{ maxHeight: "80vh" }} className="overflow-auto pt-2">
      {data.map((text, index) => {
        return (
          <div className="w-full max-w-[500px] leading-1.5 p-1 bg-indigo-500 rounded-e-xl rounded-es-xl my-5">
            <p className="text-md font-normal text-white pl-2 break-normal">
              {text}
            </p>
          </div>
        );
      })}
    </div>
  );
}
