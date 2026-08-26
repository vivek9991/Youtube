import React from "react";
import { commentsMock } from "../mockData/commentsMock";
import UserIcon from "../assets/user.jpeg";

const Comment = ({ comment }) => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <img
          style={{ height: "40px", paddingLeft: "5px" }}
          alt="user icon"
          src={UserIcon}
        />
        <div>
          <p>{comment.name}</p>
          <p>{comment.commentText}</p>
        </div>
      </div>
      <div style={{ marginLeft: "30px", borderLeft: "1px solid black" }}>
        {comment.replies.map((c) => (
          <Comment comment={c} />
        ))}
      </div>
    </div>
  );
};

const CommentsList = ({ commentsData }) => {
  return commentsData.map((comment) => <Comment comment={comment} />);
};

const CommentsContainer = () => {
  return (
    <div
      style={{
        width: "1000",
        backgroundColor: "gray",
        borderRadius: "5px",
        padding: "5px",
      }}
    >
      <p style={{ fontSize: "20px" }}>Comments</p>
      <CommentsList commentsData={commentsMock} />
    </div>
  );
};

export default CommentsContainer;
