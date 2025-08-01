import Header from "./components/Header";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="max-w-[1229px] mx-auto px-4">
        <div className="mt-2 relative z-20">
          <Navbar />
        </div>
        
        <Hero />
      </div>
    </div>
  );
}
