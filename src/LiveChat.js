import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChatMessage from "./components/ChatMessage";
import { addMessage } from "./utils/chatSlice";
import { generateRandomMessage, generateRandomNames } from "./utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      //API Pollig here!
      // console.log("API Polling");

      dispatch(
        addMessage({
          name: generateRandomNames(),
          message: generateRandomMessage(6),
        })
      );
    }, 3000);

    return () => {
      clearInterval(i);
    };
  }, []);

  return (
    <div>
      <div>
        {chatMessages.map((chats, idx) => {
          return (
            <ChatMessage name={chats.name} message={chats.message} key={idx} />
          );
        })}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // console.log("On Form Submit", liveMessage);
          dispatch(
            addMessage({
              name: "Subham Saha",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          type="text"
          placeholder="Chat Publicly"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
          className="mt-2 w-2/3 p-2"
        />
        <button className="ml-3 bg-slate-600 p-2 text-white">Send</button>
      </form>
    </div>
  );
};

export default LiveChat;
