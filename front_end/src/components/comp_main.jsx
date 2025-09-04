import { Routes, Route } from "react-router-dom";
import Home from "/Users/Taku/Documents/git_Workspace/takungweWebPortfolio/front_end/src/components/comp_contents/contents_main_home.jsx";
import About from "/Users/Taku/Documents/git_Workspace/takungweWebPortfolio/front_end/src/components/comp_contents/contents_main_about.jsx";
import Resume from "/Users/Taku/Documents/git_Workspace/takungweWebPortfolio/front_end/src/components/comp_contents/contents_main_resume.jsx";
import Portfolio from "/Users/Taku/Documents/git_Workspace/takungweWebPortfolio/front_end/src/components/comp_contents/content_main_portfolio.jsx";

export default function Main_component() {
  return (
    <main className="flex-1 flex items-center justify-center overflow-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </main>
  );
}
