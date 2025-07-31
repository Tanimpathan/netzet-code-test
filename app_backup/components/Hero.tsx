// import CTAButton from './CTAButton'
// import FeatureList from './FeatureList'
// import PhoneMockup from './PhoneMockup'

// export default function Hero() {
//   return (
//     <section className="flex flex-col-reverse lg:flex-row justify-between max-w-screen-xl mx-auto px-4">
//       {/* Left */}
//       <div className="max-w-xl">
//         <h1 className="text-3xl md:text-4xl font-bold mb-4">
//           Want to Turn Social Media Into a Profitable Career?
//         </h1>
//         <h2 className="text-xl font-semibold text-cyan-400 mb-6">
//           Discover your way to success with Fametonic:
//         </h2>

//         <FeatureList />

//         <CTAButton />
        
//         <p className="text-xs text-gray-400 mt-4">
//           By clicking “Get Started”, you agree with Terms and Conditions, Privacy Policy, Subscription Terms
//         </p>
//         <p className="text-[10px] text-gray-500 mt-1">Fametonic 2025 © All Rights Reserved.</p>
//       </div>

//       {/* Right */}
//       <PhoneMockup />
//     </section>
//   )
// }


import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-black text-white pt-20 pb-12">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center relative">

        {/* Text Content */}
        <div className="w-full md:w-1/2 space-y-6 z-10">
          <h1 className="text-3xl md:text-4xl font-bold leading-snug">
            Want to Turn Social Media Into a Profitable Career?
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-cyan-400">
            Discover your way to success with <span className="text-pink-500">Fametonic</span>:
          </h2>
          <ul className="space-y-3 text-sm md:text-base text-gray-200 list-disc list-inside">
            <li>Start growing your influence right away—no waiting required!</li>
            <li>Create viral TikToks and Reels step by step</li>
            <li>Use a Personal AI Worker to boost your content</li>
            <li>Learn from expert-led courses</li>
          </ul>
          <button className="bg-pink-500 text-white py-3 px-6 rounded-full font-semibold hover:bg-pink-600 transition">
            GET STARTED →
          </button>
          <p className="text-xs text-gray-500">1-minute quiz for personalized insights</p>
        </div>

        {/* Phone Mockup */}
        <div className="relative w-full md:w-1/2 flex mt-12 md:mt-0 md:absolute md:top-0 md:right-[-100px] z-0">
          <Image
            src="/phone-mockup.png" // Use the uploaded image in public/
            alt="Phone mockup"
            width={500}
            height={500}
            className=" w-full h-auto object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}

