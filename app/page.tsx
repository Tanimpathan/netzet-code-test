import Header from "./components/Header";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="w-full px-5 lg:max-w-[1056px] lg:mx-auto lg:px-[-216px]">
        <div className="mt-3 relative z-20">
          <Navbar />
        </div>        
        <Hero />
      </div>
    </div>
  );
}