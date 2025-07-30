import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <Header />

      <div className="mt-2">
        <Navbar />
      </div>
      
      <Hero />
    </div>
  );
}
