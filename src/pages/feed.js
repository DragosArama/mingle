import React, { useState, useEffect } from "react";
import Promo from "@/components/Promo";
import YtEmbed from "@/components/YouTubePlayer";
import TweetCard from "@/components/TweetCard";
import InstagramPost from "@/components/InstagramPost";
import SpotifyTrackCard from "@/components/SpotifyTrackCard";
import BlogPostList from "@/components/BlogPostList";
import Banner from "@/components/Banner";
import "../styles/Pages.css";

const Feed = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isPremium, setIsPremium] = useState(false); // State to handle the toggle for premium mode

  useEffect(() => {
    // Set a timer to hide the loader after 10 milliseconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "48px",
          backgroundColor: "black",
          color: "#FFF",
          zIndex: 1000,
        }}
      >
        We are building your custom feed...
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-12 mx-4">
        {!isPremium && ( // Conditionally rendering Promo based on isPremium state
          <>
            <div className="col-span-2">
              <Promo />
            </div>
            <div className="col-span-8">
              <div className="flex justify-center items-center bg-black mx-4">
                <label className="switch">
                  <input type="checkbox" checked={isPremium} onChange={() => setIsPremium(!isPremium)} className="switch-input" />
                  <span className="slider"></span>
                </label>
                <span className="ml-2 text-lg font-medium text-white my-4">Premium</span>
              </div>
              <Banner />
              <InstagramPost />
              <Banner />
              <YtEmbed />
              <TweetCard />
              <InstagramPost />
              <SpotifyTrackCard />
              <Banner />
              <BlogPostList />
            </div>
            <div className="col-span-2">
              <Promo />
            </div>
          </>
        )}
        {isPremium && (
          <div className="col-span-12">
            <div className="flex justify-center items-center">
              <label className="switch">
                <input type="checkbox" checked={isPremium} onChange={() => setIsPremium(!isPremium)} className="switch-input" />
                <span className="slider"></span>
              </label>
              <span className="ml-2 text-lg font-medium">Premium</span>
            </div>
            <div className="text-center mt-4">
              Ad free | Machine learning feed | Premium content
              <BlogPostList />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Feed;
