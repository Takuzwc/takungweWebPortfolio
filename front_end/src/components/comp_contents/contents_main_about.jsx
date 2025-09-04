export default function About() {
  return (
    <div
      className="h-full w-full flex items-center px-20 bg-black bg-opacity-90"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507537297725-24a1c029d3ca')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-lg">
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
