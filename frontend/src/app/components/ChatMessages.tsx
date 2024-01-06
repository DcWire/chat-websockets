type ChatMessagesProps = { data: Array<String> };
export default function ChatMessages({ data }: ChatMessagesProps) {
  return (
    <div style={{ maxHeight: "80vh" }} className="overflow-auto">
      {data.map((text, index) => {
        return <div>{text}</div>;
      })}
    </div>
  );
}
