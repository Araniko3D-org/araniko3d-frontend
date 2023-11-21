import React from "react";

function YTVideoComponent() {
  const renderYouTubeVideo = () => {
    const videoUrl = "https://www.youtube.com/watch?v=wJM9e6m_Vbc";

    const urlParams = new URLSearchParams(new URL(videoUrl).search);
    const videoId = urlParams.get("v");

    return (
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube Video"
        frameBorder="0"
        allowFullScreen
      />
    );
  };

  return (
    <div className="flex w-full justify-center youtube-video">
      <div className="youtube-video-container">{renderYouTubeVideo()}</div>
    </div>
  );
}

export default YTVideoComponent;
