import React from "react";
import { FaUserCircle } from "react-icons/fa";

const commentsData = [
  {
    name: "Subhraj Singh Rajput",
    text: "I  have heard alot of mashups but this one hits so perfect, this guy has really put effort making this masterpiece I respect! Please make more like this !",
    replies: [
      {
        name: "Raghu Narang",
        text: "Amazing selection of songs and your talent of making this legendary mashup is much appreciated bro. Thanks a lot. It's soothing music helps us to go deep and achieve the inner peace.....away from this tech world and away from the upcoming METAVERSE. Keep it up",
        replies: [],
      },
      {
        name: "Rahul Agarwal",
        text: "The way this playlist never bored me As well as helped to get immersed in the nature is so damn..",
        replies: [
          {
            name: "Abhi Mittal",
            text: "Bro u made my expectations high, waiting for upcoming mixtapes",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Raj Viswakarma",
    text: "This is the masterpiece not just travelling but to bring someone's soul back to their real selves",
    replies: [
      {
        name: "Virat Kohli",
        text: "How soothing is it! Ah i just love to listen it again and again...",
        replies: [],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex items-center gap-2 bg-gray-200  rounded p-2 mb-2">
      <div>
        <FaUserCircle size={35} className="cursor-pointer" />
      </div>
      <div>
        <p className="font-medium">{name}</p>
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

            <div className="ml-4 pl-4">
              <CommentList comments={comment.replies} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

const CommentsContainer = ({ count }) => {
  return (
    <div className="px-1 mb-2">
      <h1 className="mt-2 text-xl font-semibold mb-2">{count} Comments</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
