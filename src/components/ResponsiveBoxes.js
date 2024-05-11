"use client";
import React, { useState } from "react";
import Link from "next/link";

const ResponsiveBoxes = () => {
  const [selectedBoxes, setSelectedBoxes] = useState([]);
  const [boxTexts, setBoxTexts] = useState(["Sport", "Politics", "News", "Entertainment", "Lifestyle", "Music"]);

  const handleBoxClick = (index) => {
    if (selectedBoxes.includes(index)) {
      setSelectedBoxes(selectedBoxes.filter((boxIndex) => boxIndex !== index));
    } else {
      setSelectedBoxes([...selectedBoxes, index]);
    }
  };

  const hasSelectedBoxes = selectedBoxes.length > 0;

  return (
    <div>
      <div className="flex justify-center items-center my-4">
        {hasSelectedBoxes && (
          <Link href="/feed" className="bg-yellow-500 text-white py-4 px-8 rounded-xl text-3xl cursor-pointer">
            Go to Feed
          </Link>
        )}
      </div>
      <div className="flex flex-wrap h-[60vh] relative">
        {boxTexts.map((text, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/3 p-4">
            <div className={`bg-black rounded-md p-4 cursor-pointer transition duration-300 transform hover:scale-105 h-full flex items-center justify-center ${selectedBoxes.includes(index) ? "bg-yellow-500" : ""}`} onClick={() => handleBoxClick(index)}>
              <p className={`text-white text-4xl ${selectedBoxes.includes(index) ? "font-bold" : ""}`}>{text}</p>
              {selectedBoxes.includes(index) && (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 absolute top-2 right-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResponsiveBoxes;
