import React from "react";
import LiveComment from "./LiveComment";
import { useDispatch, useSelector } from "react-redux";
import { addToChatList } from "../redux-store/slice/chatSlice";
import { generateNames, makeChatMessage } from "../utils/helper";
import { current } from "@reduxjs/toolkit";

const LiveChatContainer = () => {
  const dispatch = useDispatch();
  const chatList = useSelector((store) => store.chat.comments);
  React.useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        addToChatList({
          name: generateNames(),
          commentText: makeChatMessage(20),
        }),
      );
    }, 500);

    return () => clearInterval(interval);
  }, []);
  const chatRef = React.useRef(null);
  return (
    <div>
      <div
        style={{
          marginLeft: "10px",
          paddingLeft: "10px",
          border: "1px solid black",
          width: "24vw",
          height: "513px",
          overflow: "scroll",
          marginTop: "1px",
          backgroundColor: "rgb(228, 225, 225)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <p style={{ fontWeight: "bold", fontSize: "20px" }}> Live chat</p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            flex: 1,
          }}
        >
          {chatList.map((chat, idx) => (
            <LiveComment
              key={idx}
              name={chat.name}
              commentText={chat.commentText}
            />
          ))}
        </div>
      </div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div style={{ display: "flex" }}>
          <input
            type="text"
            style={{
              borderRadius: "20px",
              margin: "15px",
              width: "250px",
              height: "20px",
              border: "1px solid black",
              padding: "5px",
            }}
            placeholder="Enter any text"
            ref={chatRef}
          />
          <button
            style={{
              marginTop: "15px",
              height: "32px",
              borderRadius: "10px",
              backgroundColor: "blue",
              color: "white",
              border: "1px solid blue",
              padding: "5px",
            }}
            onClick={() => {
              console.log("hey");
              dispatch(
                addToChatList({
                  name: "Vivek",
                  commentText: chatRef.current.value,
                }),
              );
              chatRef.current.value = "";
            }}
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default LiveChatContainer;
