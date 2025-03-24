import React, { useEffect, useState } from "react";
import {
  Avatar,
  Backdrop,
  CircularProgress,
  Grid,
  IconButton,
} from "@mui/material";
import WestIcon from "@mui/icons-material/West";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import SearchUser from "../../Components/SearchedUser/SearchUser";
import UserChadCard from "./UserChadCard";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { createMessage, getAllChats } from "../../redux/Message/message.action";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { uploadToCloudinary } from "../../utils.js/uploadToCloudanary";
import SockJS from "sockjs-client";
import { Stomp } from "@stomp/stompjs";

const Message = () => {
  const dispatch = useDispatch();

  const { auth, message } = useSelector((store) => store);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);

  const [selectedImage, setSelectedImage] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(getAllChats());
  }, []);
  // console.log("chats .....", message.chats);

  const handleSelectImage = async (e) => {
    setLoading(true);
    console.log("handle select image");
    const imageUrl = await uploadToCloudinary(e.target.files[0], "image");
    setSelectedImage(imageUrl);
    setLoading(false);
  };

  const handleCreateMessage = (value) => {
    const message1 = {
      chatId: currentChat?.id,
      content: value,
      image: selectedImage,
    };
    dispatch(createMessage(message1));
    console.log("dispatch message....", message1);
  };

  useEffect(() => {
    setMessages([...messages, message.message]);
  }, [message.message]);

  const [stomClient,setStompClient]  = useState(null);

  useEffect(()=>{
    // const sock = new SockJS("http://localhost:8082/ws")
    // const stomp = Stomp.over(sock);
    // setStompClient(stomp);
    // stomp.connect({},onConnect,onErr)
  })

  const onConnect =() =>{
    console.log("Web Connected");
    
  }

  const onErr =() =>{
    console.log("Web socket Errro");
    
  }

  console.log("redux message...", message);
  console.log("Messages for current chat: ", messages);

  return (
    <div>
      <Grid container className="h-screen overflow-y-hidden">
        <Grid item xs={3} className="px-5">
          <div className="flex h-full justify-between space-x-2">
            <div className="w-full">
              <div className="flex space-x-4 items-center py-5">
                <WestIcon />
                <h1 className="text-xl font-bold"> Home</h1>
              </div>

              <div className="h-[83vh]">
                <div className="">
                  <SearchUser />
                </div>

                <div className="h-[83vh] space-y-4 mt-5 overflow-y-scroll hideScrollbar">
                  {message.chats.map((item) => {
                    return (
                      <div
                        onClick={() => {
                          setCurrentChat(item);
                          setMessages(item.message);
                        }}
                      >
                        <UserChadCard chat={item} />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </Grid>

        <Grid item xs={9} className="h-full">
          {currentChat ? (
            <div>
              <div className="flex justify-between items-center border-1 p-5">
                <div className="flex items-center space-x-3">
                  <Avatar src="https://media.istockphoto.com/id/1306315860/photo/shot-of-a-mature-man-using-mobile-phone-sitting-on-sofa-at-home-stock-photo.webp?b=1&s=612x612&w=0&k=20&c=AaLxh1GqRM0fCR-uoT3YzYtDbZ2ti3lF1J_3pael9jw=" />
                  <p>
                    {auth.user?.id === currentChat.users[0]?.id
                      ? currentChat.users[1]?.firstname +
                        " " +
                        currentChat.users[1]?.lastname
                      : currentChat.users[0]?.firstname +
                        " " +
                        currentChat.users[0]?.lastname}
                  </p>
                </div>

                <div className="flex space-x-3">
                  <IconButton>
                    <AddIcCallIcon />
                  </IconButton>

                  <IconButton>
                    <VideoCallIcon />
                  </IconButton>
                </div>
              </div>

              <div className="hideScrollbar overflow-y-scroll h-[82vh] px-2 space-y-5 py-5">
                {messages?.map((item) => {
                  return <ChatMessage item={item} />;
                })}
                {/* <ChatMessage /> */}
              </div>

              <div className="sticky bottom-0 border-1">
              {selectedImage && (
                    <img
                      src={selectedImage}
                      className="w-[5rem] h-[5rem] object-cover px-2"
                      alt=""
                    />
                  )}
                <div className="py-5 flex items-center justify-center space-x-5">
                  
                  <input
                    onKeyPress={(e) => {
                      if (e.key === "Enter" && e.target.value) {
                        handleCreateMessage(e.target.value);
                        setSelectedImage("")
                      }
                    }}
                    type="text"
                    className="bg-transparent border border-[#3b40544] rounded-full w-[90%] py-3 px-5"
                    placeholder="Type message.."
                  />

                  <div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleSelectImage}
                      className="hidden"
                      id="image-input"
                    />
                    <label htmlFor="image-input">
                      <AddPhotoAlternateIcon />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="h-full space-y-5 flex flex-col justify-center items-center">
              <ChatBubbleOutlineIcon sx={{ fontSize: "15rem" }} />
              <p className="text-xl font-semibold"> No Chat Selected</p>
            </div>
          )}
        </Grid>
      </Grid>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};

export default Message;
