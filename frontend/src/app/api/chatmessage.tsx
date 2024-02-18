const createNewChatmessage = (text: string) =>
  fetch("http://localhost:8000/api/messages/", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ message: text }),
  });

export default {
  createNewChatmessage,
};
