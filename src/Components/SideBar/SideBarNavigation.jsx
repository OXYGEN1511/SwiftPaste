import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ListAltIcon from '@mui/icons-material/ListAlt';
import GroupIcon from '@mui/icons-material/Group';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MessageIcon from '@mui/icons-material/Message';

const navigationMenu = [
    {   key:0,
        title:"Home",
        icon: <HomeIcon/>,
        path:"/"
    },
    { 
    key:1,
    title: "Reels", 
    icon: <ExploreIcon />, 
    path: "/reels" 
   },
  { 
    key:2,
    title: "CreateReels",
     icon: <ControlPointIcon />,
      path: "/create-reels"
   },
  {   key:3,title: "Notifications", icon: <NotificationsIcon />, path: "/" },
  {  key:4,title: "Message", icon: <MessageIcon />, path: "/message" },
  { key:5, title: "Lists", icon: <ListAltIcon />, path: "/" },
  {  key:6,title: "Communities", icon: <GroupIcon />, path: "/" },
  {  key:7, title: "Profile", icon: <AccountCircleIcon />, path: "/profile" },
];

export default navigationMenu; 
