import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { createReelAction } from "../actions/reelsAction";

const CreateReelsForm = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.reels);
  const [video, setVideo] = useState(null);
  const [caption, setCaption] = useState("");

  const handleVideoChange = (e) => {
    setVideo(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!video) {
      alert("Please select a video to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("video", video);
    formData.append("caption", caption);

    // dispatch(createReelAction(formData));
    setVideo(null);
    setCaption("");
  };

  return (
    <div className="create-reel-container">
      <h2>Create Reel</h2>
      <form onSubmit={handleSubmit} className="create-reel-form">
        <input type="file" accept="video/*" onChange={handleVideoChange} />
        <input
          type="text"
          placeholder="Enter caption..."
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Uploading..." : "Upload Reel"}
        </button>
      </form>
    </div>
  );
};

export default CreateReelsForm;
