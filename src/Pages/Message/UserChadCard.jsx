import { Avatar, Card, CardHeader, IconButton } from "@mui/material";
import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useDispatch, useSelector } from "react-redux";
const UserChadCard = ({ chat }) => {
  const {message,auth} = useSelector(store =>store);
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar
            src="https://cdn.pixabay.com/photo/2023/06/23/11/23/ai-generated-8083323_1280.jpg"
            sx={{
              width: "3.5rem",
              height: "3.5rem",
              fontSize: "1.5rem",
              bgcolor: "#191c29",
              color: "rgb(88,199,250)",
            }}
          />
        }
        action={
          <IconButton>
            <MoreHorizIcon />
          </IconButton>
        }
        title={auth.user.id===chat.users[0].id?chat.users[1].firstname+" "+chat.users[1].lastname:
        chat.users[0].firstname+" "+chat.users[0].lastname}
        subheader={"New Message"}
      ></CardHeader>
    </Card>
  );
};

export default UserChadCard;
