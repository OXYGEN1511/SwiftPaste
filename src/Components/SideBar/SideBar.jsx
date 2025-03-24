import React from 'react';
import navigationMenu from './SideBarNavigation.jsx';
import { Avatar, Divider } from '@mui/material';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Card from '@mui/material/Card';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { logoutUserAction } from '../../redux/Auth/auth.action.js';

const SideBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const { auth } = useSelector(store => store);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleNavigate = (item) => {
    if (item.title === "Profile") {
      navigate(`/profile/${auth.user?.id}`);
    } else {
      navigate(item.path);
    }
  };

  const handleLogout = () => {
    dispatch(logoutUserAction());
    window.location.href = "/login";
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Card className='h-screen flex flex-col justify-between py-5 shadow-lg rounded-lg'>
      <div className='space-y-8 pl-5  '>
        <div className='text-purple-700 font-bold text-xl'>Tushar</div>
        <div className='space-y-6'>
          {navigationMenu.map((item) => (
            <div
              key={item.key}
              onClick={() => handleNavigate(item)}
              className='flex items-center space-x-3 cursor-pointer p-2 rounded-lg hover:bg-purple-200 text-purple-800'
            >
              {item.icon}
              <p className='text-lg font-medium'>{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <Divider className='bg-purple-400' />
        <div className='pl-5 flex items-center justify-between pt-5 pb-2'>
          <div className='flex items-center space-x-3'>
            <Avatar src='https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652_1280.png' />
            <div>
              <p className='font-bold text-purple-900'>{auth.user?.firstname} {auth.user?.lastname}</p>
              <p className='text-purple-700 opacity-70'>@{auth.user?.firstname.toLowerCase()}_{auth.user?.lastname.toLowerCase()}</p>
            </div>
            <Button onClick={handleClick}>
              <MoreHorizIcon className='text-purple-600' />
            </Button>
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SideBar;
