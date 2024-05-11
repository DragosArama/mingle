import React from "react";
import { FaRegHeart, FaRegComment, FaRetweet } from "react-icons/fa";

const TweetCard = () => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden mt-16">
      {/* User Info */}
      <div className="flex items-center space-x-4 p-4">
        <div className="flex-shrink-0">
          <img className="h-10 w-10 rounded-full" src="https://via.placeholder.com/40x40.png" alt="User profile" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate">Jane Doe</p>
          <p className="text-sm text-gray-500 truncate">@janedoe</p>
        </div>
      </div>

      {/* Tweet Content */}
      <div className="p-4">
        <p className="text-gray-800 text-sm">Just saw the most amazing sunset! 🌅 #breathtaking #nature</p>
      </div>

      {/* Interaction Icons */}
      <div className="px-4 py-3 flex justify-between items-center bg-gray-50">
        <div className="flex items-center space-x-4 text-gray-600">
          <FaRegComment className="text-xl cursor-pointer hover:text-gray-800" />
          <FaRetweet className="text-xl cursor-pointer hover:text-gray-800" />
          <FaRegHeart className="text-xl cursor-pointer hover:text-red-600" />
        </div>
        <div className="text-sm text-gray-600">15h</div>
      </div>
    </div>
  );
};

export default TweetCard;
