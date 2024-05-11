const Banner = () => {
  const boxes = Array.from({ length: 80 }, (_, index) => ({
    id: index,
    text: Math.random() > 0.5 ? "Advertised" : "Sponsored",
  }));

  return (
    <div className="bg-gray-500 flex items-center justify-center py-16 my-16 max-w-2xl mx-auto shadow-lg rounded-lg">
      <p className="text-4xl">Banner</p>
    </div>
  );
};

export default Banner;
