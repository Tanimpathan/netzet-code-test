import Image from "next/image";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="relative bg-black text-white pt-10 pb-2 z-10">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center relative">

        {/* Phone Mockup */}
        <div className="w-full md:w-5/7 flex mt-12 md:mt-0 md:absolute md:top-[-250px] md:right-[-160px] hero-bg">
          <Image
            src="/phone-mockup.png"
            alt="Phone mockup"
            width={666}
            height={679}      
            priority
          />
        </div> 
      </div>
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center relative">
        
        {/* Text Content */}
        {/* w-full md:w-3/5 space-y-6 z-10 */}
        <div className="md:max-w-[516px]">
          <h1 className="font-urbanist font-bold text-[25px] lg:leading-[1] leading-none tracking-normal text-center lg:tracking-[0] mb-2 lg:text[35px] lg:text-start">
            Want to Turn Social Media Into a Profitable Career?
          </h1>

          <h2 className="font-urbanist font-bold text-[25px] leading-none tracking-normal lg:text-[35px] lg:leading-[1] lg:tracking-[0] text-[#00E7F9] [text-shadow:0px_4px_4px_#FC004E] mb-4 text-center lg:text-start">
            Discover your way to success with Fametonic:
          </h2>

          <ul className="space-y-3 text-sm md:text-base text-gray-200 list-none list-inside mb-5">
            <li className="list-design"><span className="font-figtree font-semibold text-base leading-[22px] tracking-normal ps-[10px]">Start growing your influence right away—no waiting required!</span></li>

            <li className="list-design"><span className="font-figtree font-semibold text-base leading-[22px] tracking-normal ms-[10px]">Create viral TikToks and Reels step by step</span></li>

            <li className="list-design"><span className="font-figtree font-semibold text-base leading-[22px] tracking-normal ms-[10px]">Use a Personal AI Worker to boost your content</span></li>
            
            <li className="list-design"><span className="font-figtree font-semibold text-base leading-[22px] tracking-normal ms-[10px]">Learn from expert-led courses</span></li>
          </ul>

          <div className="md:w-[313px] mb-[24px]">
            <Button></Button>
            <p className="mt-[10px] font-figtree font-normal text-xs leading-4 text-center tracking-normal">1-minute quiz for personalized insights</p>
          </div>

          <p className="font-figtree font-medium text-xs leading-none tracking-normal text-[#ABABAB] mb-[10px]">By clicking "Get Started", you agree with Terms and Conditions, Privacy Policy, Subscription Terms</p>
          <p className="font-figtree font-medium text-[10px] leading-none align-middle tracking-normal text-[#ABABAB]">Fametonic 2025 ©All Rights Reserved.</p>
        </div>

        
      </div>
    </section>
  );
}