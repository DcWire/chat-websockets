type ChatMessagesProps = { data: Array<Array<String | Number>> };
export default function ChatMessages({ data }: ChatMessagesProps) {
  return (
    <div style={{ maxHeight: "80vh" }} className="overflow-auto pt-2 ">
      {data.map((item, index) => {
        if (item[1]) {
          return (
            <div className="justify-end flex">
              <div className="w-full max-w-[500px] leading-1.5 p-1 bg-indigo-500 rounded-l-xl rounded-br-xl my-5 flex justify-end">
                <p className="text-md font-normal text-white pr-2 break-normal">
                  {`${item[0]}`}
                </p>
              </div>
            </div>
          );
        } else {
          return (
            <div className="w-full max-w-[500px] leading-1.5 p-1 bg-indigo-500 rounded-e-xl rounded-es-xl my-5 ">
              <p className="text-md font-normal text-white pl-2 break-normal">
                {`${item[0]}`}
              </p>
            </div>
          );
        }
      })}
    </div>
  );
}
