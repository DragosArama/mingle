import React from "react";
import "../styles/Promo.css";

const Feed = () => {
  const boxes = Array.from({ length: 80 }, (_, index) => ({
    id: index,
    text: Math.random() > 0.5 ? "Advertised" : "Sponsored",
  }));

  return (
    <div className="feed-container">
      {boxes.map((box, index) => (
        <div key={box.id} className="scroll-box" style={{ animationDelay: `-${index * 10}s` }}>
          {box.text}
        </div>
      ))}
    </div>
  );
};

export default Feed;
