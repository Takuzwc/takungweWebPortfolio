import "/Users/Taku/Documents/git_Workspace/takungweWebPortfolio/front_end/src/components/comp_contents/comp_contents_css/main_home.css";

export default function Home() {
  return (
    <div
      className="h-full w-full flex flex-col items-start justify-center px-20"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1510519138101-570d1dca3d66?q=80&w=1147&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero_display">
        <h3 className="hero_text text-5xl font-bold --color-white">TAKUNDA</h3>
        <h1 className="hero_text hero_text_two">NGWENYA</h1>
        <p className="occupation_text text-xl mt-2">Software Engineer</p>
        <div className="hero_buttons mt-6 flex gap-4">
          <button className=" px-6 py-2 bg-white text-black font-semibold rounded-2xl shadow">
            Resume
          </button>
          <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-2xl shadow">
            Portfolio
          </button>
        </div>
      </div>
    </div>
  );
}
