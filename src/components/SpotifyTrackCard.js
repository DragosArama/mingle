import React from "react";
import { FaPlayCircle, FaHeart } from "react-icons/fa";

const SpotifyTrackCard = () => {
  return (
    <div className="max-w-sm mx-auto bg-black text-white rounded-lg overflow-hidden shadow-lg mt-16">
      {/* Album Art */}
      <div className="relative">
        <img className="w-full" src="https://via.placeholder.com/500x500?text=Album+Art" alt="Album Art" />
        <div className="absolute right-2 top-2">
          <FaHeart className="text-white text-xl opacity-75 hover:opacity-100 cursor-pointer" />
        </div>
      </div>

      {/* Track Info */}
      <div className="px-4 py-3">
        <h3 className="text-lg font-bold">Track Title</h3>
        <p className="text-sm text-gray-400">Artist Name</p>
      </div>

      {/* Play Button */}
      <div className="px-4 pb-4">
        <FaPlayCircle className="text-green-500 text-3xl cursor-pointer hover:text-green-300" />
      </div>
    </div>
  );
};

export default SpotifyTrackCard;
