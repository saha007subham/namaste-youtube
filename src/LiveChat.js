import React, { useEffect } from "react";
import ChatMessage from "./components/ChatMessage";

const LiveChat = () => {
  useEffect(() => {
    const i = setInterval(() => {
      //API Pollig here!
      console.log("API Polling");
    }, 2000);

    return () => {
      clearInterval(i);
    };
  }, []);

  return (
    <div>
      <ChatMessage
        name="Subham Saha"
        message="This is Namaste React Live dvdfv fvdfv fdvdfv vfvfd"
      />
    </div>
  );
};

export default LiveChat;
