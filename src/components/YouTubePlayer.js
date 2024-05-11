import React from "react";
import { FaPlay, FaPause, FaVolumeUp, FaExpand } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";

const YouTubePlayer = () => {
  return (
    <div className="w-full max-w-2xl mx-auto bg-black rounded-lg overflow-hidden shadow-xl mt-16">
      {/* Video Screen Placeholder */}
      <div className="relative overflow-hidden bg-gray-800" style={{ paddingBottom: "56.25%" }}>
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
          <FaPlay className="text-white text-6xl opacity-50" />
        </div>
      </div>

      {/* Control Bar */}
      <div className="flex items-center justify-between p-2 bg-gray-900">
        <div className="flex items-center space-x-4">
          <FaPlay className="text-white text-2xl cursor-pointer" />
          <div className="flex items-center">
            <FaVolumeUp className="text-white text-xl mr-2" />
            <div className="w-24 h-1 bg-gray-700 rounded overflow-hidden">
              <div className="bg-red-600 h-full" style={{ width: "70%" }}></div>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <FaExpand className="text-white text-2xl cursor-pointer" />
          <BsThreeDotsVertical className="text-white text-xl cursor-pointer" />
        </div>
      </div>

      {/* Video Details */}
      <div className="p-2 bg-gray-800 text-white">
        <h1 className="text-lg font-bold">Joe Media Politics Video</h1>
        <p className="text-sm">1M views · 2 days ago</p>
      </div>
    </div>
  );
};

export default YouTubePlayer;
