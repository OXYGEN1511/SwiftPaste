import Card from "@mui/material/Card";
import React from "react";
import Login from "./Login";
import Register from "./Register";
import Grid from "@mui/material/Grid2";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Authentication = () => {
  const location = useLocation();
  return (
    <div>
      <Grid container>
        <Grid className="h-screen overflow-hidden" item={true} xs={7}>
          <img
            className="w-full h-full"
            src="https://cdn.pixabay.com/photo/2022/12/10/21/41/social-media-7647812_1280.jpg"
            alt=""
          />
        </Grid>
        <Grid item={true} xs={5} className="h-screen overflow-hidden">
          <div className="px-20 flex flex-col justify-center h-full">
            <Card className="card p-8">
              <div className="flex flex-col items-center mb-5 space-y-14">
                <h1 className="text-center text-2xl font-bold">
                  My Project Name
                </h1>
                <p className=" text-center text-sm text-gray-600  w-[70%]">
                  Connecting Lives ,Sharing Stories Your Social{" "}
                </p>
              </div>

              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Routes>
              {/* Conditional Rendering */}
              {/* {location.pathname === "/register" ? <Register /> : <Login />} */}
            </Card>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Authentication;
