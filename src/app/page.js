import ResponsiveBoxes from "../components/ResponsiveBoxes";
import Header from "../components/Header";

const HomePage = () => {
  return (
    <div>
      <Header />
      <p className="max-w-3xl mx-auto mb-2">Joe Mingle is a one-stop destination for all things media-related. It aggregates content from various sources including news articles, blog posts, videos, podcasts, and social media updates. Users can personalize their feed by selecting their favorite topics, genres, and sources.</p>
      <ResponsiveBoxes />
    </div>
  );
};

export default HomePage;
