import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { getReelsAction } from "../actions/reelsAction";
// import UserReelsCard from "./UserReelsCard";'
import UserReelsCarts from "./UserReelsCarts";

const Reels = () => {
  const dispatch = useDispatch();
  // const { reels, loading } = useSelector((state) => state.reels);

  useEffect(() => {
    // dispatch(getReelsAction());
    console.log("all reeels");
    
  }, [dispatch]);

  return (
    <div className="reels-container">
    
    </div>
  );
};

export default Reels;
