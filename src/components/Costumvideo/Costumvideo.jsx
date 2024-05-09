import React, { useState } from "react";
import ReactPlayer from "react-player";
import "./video.css";
import play from "../../assets/Images/svg/videoplaybtn.svg";
import Image from "next/image";

const CustomVideoPlayer = ({ url }) => {
  const [controlsVisible, setControlsVisible] = useState(true);
  const [isPlaying, setPlaying] = useState(false);

  const handleMouseEnter = () => {
    setControlsVisible(true);
  };

  const handleMouseLeave = () => {
    setControlsVisible(false);
  };

  const handlePlayPause = () => {
    setPlaying(true);
  };

  return (
    <div
      className="custom-video-player-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ReactPlayer
        url={url}
        width="100%"
        height="100%"
        playing={isPlaying}
        controls={isPlaying}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      {(!isPlaying || controlsVisible) && (
        <button
          aria-label="video-player"
          className="play-button"
          onClick={handlePlayPause}
        >
          {!isPlaying && <Image alt="video-player" width={48} src={play} />}
        </button>
      )}
    </div>
  );
};

export default CustomVideoPlayer;
