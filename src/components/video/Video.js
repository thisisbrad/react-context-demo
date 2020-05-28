import React, { useContext } from "react";
import { VideoContext } from "../../components/store/Store";

const Video = () => {
  const [video, setVideo] = useContext(VideoContext);
  return (
    <React.Fragment>
      <div>{video}</div>
      <button onClick={() => setVideo("video")}>Set Video to Video</button>
    </React.Fragment>
  );
};

export default Video;
