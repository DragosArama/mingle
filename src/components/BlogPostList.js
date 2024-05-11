import React from "react";

const blogPosts = [
  { title: "The Future of Work: How AI Is Transforming the Traditional Workplace", summary: "Explore the impact of artificial intelligence on job roles, productivity, and the evolving concept of the workplace.", imageUrl: "https://via.placeholder.com/500x300" },
  { title: "Green Cities: Top 10 Urban Areas Leading the Charge in Sustainability", summary: "A look at cities around the world that are implementing the most innovative green technologies and sustainable practices.", imageUrl: "https://via.placeholder.com/500x300" },
  { title: "The Rise of Telehealth: What Next for Digital Healthcare?", summary: "Analyzing the surge in telehealth services during the pandemic and its long-term effects on the medical industry.", imageUrl: "https://via.placeholder.com/500x300" },
  { title: "Decoding Cryptocurrency: Investment Trends for 2024", summary: "What investors need to know about the volatile cryptocurrency market and predictions for the coming year.", imageUrl: "https://via.placeholder.com/500x300" },
  { title: "Revolutionizing Education: How Virtual Reality is Changing the Way We Learn", summary: "Virtual reality offers new methods for educational engagement. How will VR continue to transform learning?", imageUrl: "https://via.placeholder.com/500x300" },
  { title: "Beyond Coffee: The Rise of Nootropics in Boosting Brain Performance", summary: "Nootropics are gaining popularity for their brain-boosting benefits. What are they, and how safe are they?", imageUrl: "https://via.placeholder.com/500x300" },
  { title: "Climate Change and Global Policy: What Are World Leaders Doing?", summary: "An overview of global policies and agreements aimed at combating climate change.", imageUrl: "https://via.placeholder.com/500x300" },
  { title: "The Digital Detox Trend: Why More People Are Logging Off", summary: "Exploring the reasons why people are choosing to take breaks from technology for mental health benefits.", imageUrl: "https://via.placeholder.com/500x300" },
];

const BlogPostList = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold text-center mb-6">Latest News</h1>
      <div className="grid grid-cols-1 gap-6 max-w-md mx-auto">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src={post.imageUrl} alt="Blog post cover" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="font-bold text-xl mb-2">{post.title}</h2>
              <p className="text-gray-700 text-base">{post.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPostList;
