import React from "react";
import { useSelector } from "react-redux";

const ChatMessage = ({ item }) => {
  // console.log(item);
  // const ChatMessage = () => {
  const { auth, message } = useSelector((store) => store);
  console.log("auth user..",auth.user?.id)
  console.log("auth user..",item.user?.id)

  const isReqUserMessage = auth.user?.id === item.user?.id;
  console.log("Message Item:", item);

  return (
    <div
      className={`flex ${
        !isReqUserMessage ? "justify-end" : "justify-start"
      } text-white`}
    >
      <div
        className={`p-2 ${
          isReqUserMessage
            ? "bg-blue-500 rounded-full"
            : "bg-gray-800 rounded-full"
        } max-w-xs`}
      >
        {/* Image Message */}

        {item.image && (
          <img
            // src='https://cdn.pixabay.com/photo/2022/12/06/15/53/concept-car-7639256_1280.jpg'
            src={item.image}
            alt="message"
            className="w-48 h-64 object-cover rounded-md mb-2"
          />
        )}

        {/* Text Message */}
        {/* <p className="py-1">{item.content}</p> */}
        <p className="py-1">{item.content}........</p>
      </div>
    </div>
  );
};

export default ChatMessage;
