import { BrowserRouter as Router } from "react-router-dom";
import Nav_bar from "./components/nav_bar.jsx";
import Main_component from "./components/comp_main.jsx";
import Footer_bar from "/Users/Taku/Documents/git_Workspace/takungweWebPortfolio/front_end/src/components/nav_bar.jsx";

function App() {
  return (
    <Router>
      <div className="h-screen w-screen flex flex-col bg-gray-900 text-white">
        {/* Navbar */}
        <Nav_bar />

        {/* Main content (fills screen, no scroll) */}
        <Main_component />

        {/* Footer */}
        <Footer_bar />
      </div>
    </Router>
  );
}

export default App;
