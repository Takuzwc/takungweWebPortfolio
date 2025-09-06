import "/Users/Taku/Documents/git_Workspace/takungweWebPortfolio/front_end/src/components/comp_contents/comp_contents_css/about.css";
import Aboutwallpaper from "/Users/Taku/Documents/git_Workspace/takungweWebPortfolio/front_end/src/images/aboutwallpaper.png";
export default function About() {
  return (
    <div className="about_main h-full w-full flex items-center px-20 bg-black bg-opacity-90">
      <div className="about_section max-w-lg">
        <h2 className="text-3xl font-bold mb-4">
          About Takunda Harmish Ngwenya
        </h2>
        <p className="text-gray-300">
          Graphic Designer with over 10 years of experience specializing in IT
          Department management for international logistics companies. I can
          implement effective IT strategies at local and global levels. My
          greatest strength is business awareness, which enables me to
          permanently streamline infrastructure and applications.
        </p>
        <p className="mt-6 text-sm">📍 Katowice, Poland</p>
      </div>
    </div>
  );
}
