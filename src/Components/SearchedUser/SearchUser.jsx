import { Avatar, Card, CardHeader } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchUser } from "../../redux/Auth/auth.action";
import { createChat  } from "../../redux/Message/message.action";

const SearchUser = () => {
  const [username,setUserName] = useState("");
  const dispatch = useDispatch();

  const {message,auth} = useSelector(store =>store);


  const handleSearchUser = (e) => {
    setUserName(e.target.value);
    console.log("search user");
    dispatch(searchUser(username));
  };

  const handleClick = (id) => {
    dispatch(createChat({userId:id}))
    console.log(id);
  };
  return (
    <div>
      <div className="py-5 relative">
        <input
          type="text"
          className="bg-transparent border border-[#3b4054] outline-none w-full px-5 py-3 rounded-full
            "
          placeholder="search user.."
          onChange={handleSearchUser}
        />
        
      {username && (
       auth.searchUser.map((item) => 
        <Card className="absolute w-full z-10 top-[4.5rem] cursor-pointer" key={item.id}>
           <CardHeader
            onClick={() => {
            handleClick(item.id);
           setUserName("")
         }}
         avatar={
           <Avatar src="https://media.istockphoto.com/id/1394398200/photo/businesswoman-relaxes-and-uses-a-smartphone-in-a-restaurant.webp?b=1&s=612x612&w=0&k=20&c=dSeIOl4pxNt6MSKZM2SlUwXBqDn-t5IJyttshqh1Fx0=" />
         }
         title={item.firstname+" "+ item.lastname}
         subheader={item.firstname +"@"+ item.lastname}
       />
     </Card>)
      )}
      </div>

    </div>
  );
};

export default SearchUser;
