import { Avatar, Card, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import StoryCircle from "./StoryCircle";
import ImageIcon from "@mui/icons-material/Image";
import VideocamIcon from "@mui/icons-material/Videocam";
import ArticleIcon from "@mui/icons-material/Article";
import PostCard from "../Post/PostCard";
import CreatePostModal from "../CreatePostModal/CreatePostModal";
import { useDispatch, useSelector } from "react-redux";
import { getAllPostAction } from "../../redux/Post/Post.action";

const story = [1, 2, 3, 4, 5];
const posts = [6, 7, 8, 9, 10];

const MiddlePart = () => {
const [openCreatePostModal,setOpenCreatePostModal] = useState(false);
const handleCloseCreatePostModel = () =>setOpenCreatePostModal(false);
const dispatch  = useDispatch();
const {post} = useSelector(store=>store);

console.log("post store" ,post);

  const handleOpenCreatePostModel = () => {
    setOpenCreatePostModal(true);
    console.log("open post model",);
  };

  useEffect(()=>{
    dispatch(getAllPostAction());
  },[post.newComments])

  useEffect(() => {
    console.log("Fetched posts:", post.posts);
  }, [post.posts]);


  return (
    <div className="mt-5">
      {/* Story Section */}
      <section className="flex items-center p-5 rounded-b-md">
        <div className="flex flex-col items-center mr-4 cursor-pointer">
          <Avatar sx={{ width: "4rem", height: "4rem" }}>
            <AddIcon sx={{ fontSize: "3rem" }} />
          </Avatar>
          <p>New</p>
        </div>

        {story.map((item, index) => (
          <StoryCircle key={index} />
        ))}
      </section>

      {/* Create Post Card */}
      <Card className="p-5 mt-5">
        <div className="flex justify-between">
          <Avatar sx={{ width: "3rem", height: "3rem" }} />
          <input
            // onClick={}
            readOnly
            className="outline-none w-[80%] rounded-full px-5 bg-transparent border-[#3b4054] border cursor-pointer"
            type="text"
            onClick={handleOpenCreatePostModel}
          />
        </div>

        {/* Post Options */}
        <div className="flex justify-center space-x-9 mt-5">
          <div className="flex items-center">
            <IconButton color="primary" onClick={handleOpenCreatePostModel}>
              <ImageIcon />
            </IconButton>
            <span>Media</span>
          </div>

          <div className="flex items-center">
            <IconButton color="primary" onClick={handleOpenCreatePostModel}>
              <VideocamIcon />
            </IconButton>
            <span>Video</span>
          </div>

          <div className="flex items-center">
            <IconButton color="primary" onClick={handleOpenCreatePostModel}>
              <ArticleIcon />
            </IconButton>
            <span>Article</span>
          </div>
        </div>
      </Card>

      {/* Posts Section */}
      <div className="mt-5 space-y-5">
       {post.posts.map((items)=><PostCard item={items}  />)}
      </div>

      <div>
        <CreatePostModal  handleClose={handleCloseCreatePostModel} open={openCreatePostModal}/>;  
      </div>
    </div>
  );
};

export default MiddlePart;