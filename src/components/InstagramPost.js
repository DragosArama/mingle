import React from "react";
import { FaRegHeart, FaRegComment, FaRegBookmark } from "react-icons/fa";

const InstagramPost = () => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg border border-gray-200 overflow-hidden shadow-lg mt-16">
      {/* User Info */}
      <div className="flex items-center space-x-3 p-4">
        <img className="h-10 w-10 rounded-full object-cover" src="https://via.placeholder.com/40" alt="User profile" />
        <div className="flex-1 min-w-0">
          <p className="text-sm font-bold text-gray-900 truncate">JaneDoe</p>
          <p className="text-xs text-gray-500 truncate">Somewhere beautiful</p>
        </div>
      </div>

      {/* Post Image */}
      <div>
        <img className="w-full" src="https://via.placeholder.com/500x500" alt="Sunset over the mountains" />
      </div>

      {/* Interaction Icons */}
      <div className="flex justify-between items-center p-4">
        <div className="flex space-x-4">
          <FaRegHeart className="text-xl cursor-pointer hover:text-red-600" />
          <FaRegComment className="text-xl cursor-pointer hover:text-blue-600" />
        </div>
        <FaRegBookmark className="text-xl cursor-pointer hover:text-gray-800" />
      </div>

      {/* Likes */}
      <div className="px-4">
        <p className="text-sm font-bold">1,234 likes</p>
      </div>

      {/* Caption and Comments */}
      <div className="px-4 py-2">
        <p className="text-sm">
          <span className="font-bold mr-1">JaneDoe</span>
          Enjoying the breathtaking views! #nature #sunset
        </p>
        <p className="text-xs text-gray-500 mt-2">View all 12 comments</p>
      </div>

      {/* Timestamp */}
      <div className="px-4 pb-4">
        <p className="text-xs text-gray-500">2 HOURS AGO</p>
      </div>
    </div>
  );
};

export default InstagramPost;
