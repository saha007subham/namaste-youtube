import React from "react";
import { FaUserCircle } from "react-icons/fa";

const commentsData = [
  {
    name: "Subham",
    text: "djfndskj jdsknckjdsnc",
    replies: [
      {
        name: "Alex",
        text: "djfndskj jdsknckjdsnc",
        replies: [],
      },
      {
        name: "Rahul",
        text: "djfndskj jdsknckjdsnc",
        replies: [
          {
            name: "Abhik",
            text: "djfndskj jdsknckjdsnc",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Raj",
    text: "djfndskj jdsknckjdsnc",
    replies: [
      {
        name: "Virat",
        text: "djfndskj jdsknckjdsnc",
        replies: [],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex items-center gap-2 bg-gray-200 rounded p-2 mb-2">
      <div>
        <FaUserCircle size={35} className="cursor-pointer" />
      </div>
      <div>
        <p>{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return (
    <div>
      {comments.map((comment, id) => {
        return (
          <div key={id}>
            <Comment data={comment} />

            <div className="ml-4 border border-l-black pl-4">
              <CommentList comments={comment.replies} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

const CommentsContainer = () => {
  return (
    <div className="px-1">
      <h1 className="mt-2 text-xl font-bold">Comments :</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
