import React, { useState } from 'react';

//create content
const VideoContext = React.createContext('video');

// const state = {
//   videoList: [
//     {
//       videoId: "GtHiv9obO9w",
//     },
//     {
//       videoId: "NjqS2wEe4Ls",
//     },
//     {
//       videoId: "CWWOW7T82Hw",
//     },
//   ],
// };

//create provider
export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);

  const addVideos = newVideo => {
    console.log('adding context', newVideo);
    // setVideos(newVideo);
    setVideos([...videos, newVideo]);
    console.log('in context', videos.length, videos);
  };

  const deleteVideos = index => {
    console.log('deleting', index);
    const videoList = videos.filter((_, i) => i !== index);
    console.log('deleting', videoList);
    setVideos(videoList);
    console.log('in context', videos.length, videos);
  };

  //return
  return (
    //Creating an object video
    <VideoContext.Provider value={{ data: videos, addVideos, deleteVideos }}>
      {children}
    </VideoContext.Provider>
  );
};

export default VideoContext;
