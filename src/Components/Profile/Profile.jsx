import * as React from 'react';
import { useParams } from 'react-router-dom';
import { Avatar, Button } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import PostCard from '../Post/PostCard';
import Card from '@mui/material/Card';
import UserReelsCarts from '../Reels/UserReelsCarts';
import { useSelector } from 'react-redux';
import ProfileModal from './ProfileModal';

const tabs = [
  { value: "post", name: "Post" },
  { value: "reels", name: "Reels" },
  { value: "saved", name: "Saved" },
  { value: "repost", name: "Repost" },
];

// const posts = [1, 1, 11, 1];
const reels = [1, 1, 1, 1];
const savedPost = [1, 1, 1, 1];

const Profile = () => {
  const { id } = useParams();
  console.log(id);
  const [value, setValue] = React.useState('post'); // Default to "post" tab
  const {auth} = useSelector(store => store);
  const [open, setOpen] = React.useState(false);
    const handleOpenProfileModal = () => setOpen(true);
    const handleClose = () => setOpen(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const post = useSelector((state) => state.post);


  return (
    <Card className="my-8 w-[70%] mt-1">
      {/* Cover Photo */}
      <div className="rounded-md">
        <div className="h-[12rem] overflow-hidden">
          <img
            src='https://media.istockphoto.com/id/2166282428/photo/a-beautiful-and-lush-green-forest-canopy-illuminated-by-warm-sunlight-streaming-through.webp?b=1&s=612x612&w=0&k=20&c=gpFGlN2d35ZbfF2sA1Z09DcEihEmUKlpVGB_IwIcaNU='            alt="Cover"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Profile Section */}
        <div className="px-5 flex justify-between items-start mt-5 h-20">
          <Avatar
            className="transform -translate-y-24"
            sx={{ width: "10rem", height: "10rem", border: "4px solid white" }}
          src='https://media.istockphoto.com/id/1303206558/photo/headshot-portrait-of-smiling-businessman-talk-on-video-call.jpg?s=2048x2048&w=is&k=20&c=q-EcvtGhj2_Tf2w2-PVN4dZ4rjdhAprChJelEEz1oQA='
          />

          {/* Replace 'true' with actual user validation */}
          {true ? (
           <Button variant="outlined" sx={{ borderRadius: "20px" }} onClick={handleOpenProfileModal}>
           Edit Profile
         </Button>
          ) : (
            <Button variant="outlined">Follow</Button>
          )}
        </div>

        {/* User Info */}
        <div className="p-5">
          <h1 className="py-1 font-bold text-xl">{auth.user?.firstname+" "+auth.user.lastname}</h1>
          <p>@{auth.user?.firstname.toLowerCase() +"_"+ auth.user?.lastname.toLowerCase()}</p>
        </div>

        <div className="flex gap-5 items-center px-5">
          <span>41 posts</span>
          <span>35 followers</span>
          <span>5 followings</span>
        </div>

        <div>
          <p className="p-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            exercitationem unde quae sed adipisci fugit in consectetur
            similique.
          </p>
        </div>

        {/* Tabs Section */}
        <section>
          <Box sx={{ width: "100%", borderBottom: 1, borderColor: "black" }}>
            <Tabs value={value} onChange={handleChange} aria-label="profile tabs">
              {tabs.map((item) => (
                <Tab key={item.value} value={item.value} label={item.name} />
              ))}
            </Tabs>
          </Box>

          {/* Tab Content */}
          <div className="flex justify-center">
            {value === "post" ? (
              <div className="space-y-5 w-[70%] my-10">
              
              {post.posts.map((items)=>
                  <div  className="border border-slate-100 rounded-md">
                  
               <PostCard item={items}  />
                  </div>)}
                
              </div>
            ) : value === "reels" ? (
              <div className="flex flex-wrap justify-center gap-5 my-10">
                {reels.map((item, index) => (
                  <UserReelsCarts  />
                ))}
              </div>
            ) : value === "saved" ? (
              <div className="space-y-5 w-[70%] my-10">
                  {post.posts.map((items)=> (
                  <div  className="border border-slate-100 rounded-md">
                    <PostCard item={items}/>
                  </div>
                ))}
              </div>
            ) : (
              <div>Repost</div>
            )}
          </div>
        </section>
      </div>

      <section>
        <ProfileModal open={open} handleClose={handleClose}/>
      </section>
    </Card>
  );
};

export default Profile;
