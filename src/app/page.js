import ResponsiveBoxes from "../components/ResponsiveBoxes";
import Header from "../components/Header";

const HomePage = () => {
  return (
    <div>
      <Header />
      <p className="font-bold max-w-3xl mx-auto mb-2">Concept</p>
      <p className="max-w-3xl mx-auto mb-4">Joe Mingle is a one-stop destination for all things media-related. It aggregates content from various sources including news articles from all websites, videos, podcasts, and social media platforms such as Facebook, Instagram, Twitter, Spotify, Youtube and Tiktok. Users can personalize their feed by selecting their favorite topics</p>
      <p className="font-bold max-w-3xl mx-auto mb-2">Benefits</p>
      <ul className="max-w-3xl mx-auto mb-2">
        <li>- Modern content feed</li>
        <li>- Consolidates content across all platforms</li>
        <li>- Partnership prospects</li>
        <li>- Attract and engage subscribers</li>
        <li>- Enhanced advertising opportunities</li>
        <li>- Expanded monetization avenues</li>
        <li>- Introducing new ideas like premium content</li>
      </ul>
      <ResponsiveBoxes />
    </div>
  );
};

export default HomePage;
