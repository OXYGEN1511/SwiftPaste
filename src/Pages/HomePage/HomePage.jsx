import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Grid, IconButton, Drawer, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SideBar from "../../Components/SideBar/SideBar";
import MiddlePart from "../../Components/MiddlePart/MiddlePart";
import Reels from "../../Components/Reels/Reels";
import CreateReelsForm from "../../Components/Reels/CreateReelsFrom";
import Profile from "../../Components/Profile/Profile";
import HomeRight from "../../Components/HomeRight/HomeRight";
import { useDispatch, useSelector } from "react-redux";
import { getProfileAction } from "../../redux/Auth/auth.action";

const HomePage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector((store) => store);

  const isMobile = useMediaQuery("(max-width: 640px)");

  return (
    <div className="px-4 sm:px-6 md:px-10 bg-green-50 min-h-screen text-green-900 font-sans">
      {/* Hamburger Menu for Mobile */}
      {isMobile && (
        <IconButton
          onClick={() => setSidebarOpen(true)}
          className="fixed top-2 left-2 z-50 bg-green-800 hover:bg-green-800 text-white p-2 rounded-lg shadow-md"
        >
          <MenuIcon fontSize="large" />
        </IconButton>
      )}

      {/* Sidebar Drawer (Only for Mobile) */}
      <Drawer open={sidebarOpen} onClose={() => setSidebarOpen(false)}>
        <SideBar />
      </Drawer>

      <Grid container spacing={3}>
        {/* Sidebar - Hidden on Mobile, Shown on Larger Screens */}
        <Grid item xs={12} sm={4} md={3} lg={3} className="hidden sm:block">
          <div className="sticky top-0 bg-green-100 p-4 rounded-xl shadow-md">
            <SideBar />
          </div>
        </Grid>

        {/* Middle Part - Full width on Mobile, Responsive elsewhere */}
        <Grid item xs={12} sm={8} md={isHomePage ? 6 : 9} lg={isHomePage ? 6 : 9} className="flex justify-center">
          <div className="w-full bg-white border border-green-200 rounded-xl shadow-lg p-6">
            <Routes>
              <Route path="/" element={<MiddlePart />} />
              <Route path="/reels" element={<Reels />} />
              <Route path="/create-reels" element={<CreateReelsForm />} />
              <Route path="/profile/:id" element={<Profile />} />
            </Routes>
          </div>
        </Grid>

        {/* HomeRight - Hidden on Mobile, Shown on Home Page */}
        {isHomePage && (
          <Grid item xs={12} sm={4} md={3} lg={3} className="hidden md:block">
            <div className="bg-green-100 p-4 rounded-xl shadow-md">
              <HomeRight />
            </div>
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default HomePage;
