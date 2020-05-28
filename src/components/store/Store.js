import React, { useState } from "react";

//create content
export const VideoContext = React.createContext("video");

const state = {
  videoList: [
    {
      videoId: "GtHiv9obO9w",
    },
    {
      videoId: "NjqS2wEe4Ls",
    },
    {
      videoId: "CWWOW7T82Hw",
    },
  ],
};

//create provider
const Store = ({ props }) => {
  const [video, setVideo] = useState("video");

  //return
  return (
    //Creating an object video
    <VideoContext.Provider value={[video, setVideo]}>
      {props}
    </VideoContext.Provider>
  );
};

export default Store;
