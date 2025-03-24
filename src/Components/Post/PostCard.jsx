import React, { useState } from "react";
import { Card, CardHeader, IconButton, CardMedia, Avatar, CardContent, CardActions, Typography, Divider } from "@mui/material";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import ChatBubbleIcon from "@mui/icons-material/Chat";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useDispatch, useSelector } from "react-redux";
import { createCommentAction, likedPostAction } from "../../redux/Post/Post.action";
import { isLikeByReqUser } from "../../utils.js/isLikedByReqUser";

const PostCard = ({ item }) => {
  // const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const { post ,auth} = useSelector((store) => store);
  const dispatch = useDispatch();
  const [showComments, setShowComments] = useState(false);

  const handleShowComments = () => {
    setShowComments(!showComments);
  };

  const handleCreateComment = (content) => {
    const reqData = {
      postId: item.id,
      data: { content }
    };
    dispatch(createCommentAction(reqData));
  };

  const handleLikePost = () =>{
    dispatch(likedPostAction(item.id))
  }

  console.log("is liked Post",isLikeByReqUser(auth.user.id,item))

  return (
    <Card className="shadow-lg rounded-lg bg-white" sx={{ maxWidth: "40rem", margin: "auto" }}>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: red[500] }}>T</Avatar>}
        action={<IconButton><MoreVertIcon /></IconButton>}
        title={item.user?.firstname + " " + item.user?.lastname}
        subheader={"@" + (item.user?.firstname?.toLowerCase() + "_" + item.user?.lastname?.toLowerCase())}
      />

      <CardMedia
        component="img"
        image={item.image}
        alt="Post image"
        sx={{ width: "100%", height: "23rem", objectFit: "cover" }}
      />

      <CardContent>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>{item.caption}</Typography>
      </CardContent>

      <CardActions className="flex justify-between" disableSpacing>
        <div>
        <IconButton onClick={handleLikePost}>
          {isLikeByReqUser(auth.user.id,item) ? <FavoriteIcon  /> : <FavoriteBorderIcon />}
        </IconButton>

        <IconButton>
          {  <ShareIcon />}
        </IconButton>

        <IconButton onClick={handleShowComments}>
          <ChatBubbleIcon />
        </IconButton>


        <IconButton onClick={() => setBookmarked(!bookmarked)}>
          {bookmarked ? <BookmarkIcon sx={{ color: "blue" }} /> : <BookmarkBorderIcon />}
        </IconButton>


        </div>

   

      </CardActions>

      {showComments && (
        <section>
          <div className="flex items-start space-x-5 mx-3 my-5">
            <Avatar />
            <input
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleCreateComment(e.target.value);
                  console.log("Enter pressed:", e.target.value);
                }
              }}
              className="w-full outline-none bg-transparent border border-[#3b4054] rounded-full px-5 py-2"
              type="text"
              placeholder="Write your comment"
            />
          </div>
          <Divider />

          <div className="mx-3 space-y-2 my-5 text-xs">
            {Array.isArray(item.comments) &&
              item.comments.map((comment) => (
                <div key={comment.id} className="flex items-center space-x-5">
                  <Avatar sx={{ height: "2rem", width: "2rem", fontSize: "1rem",bgcolor: red[500] }}>{comment.user.firstname[0]}</Avatar>
                  <p>{comment.content}</p>
                </div>
              ))}
          </div>
        </section>
      )}
    </Card>
  );
};

export default PostCard;
