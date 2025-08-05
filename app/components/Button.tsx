import Image from "next/image";

export default function Button() {
  return (
    <button className="py-2 px-10 bg-[#FC004E] shadow-[2px_2px_10px_0px_#00E7F9] rounded-[10px] flex justify-center items-center w-full">
      <span className="text-xl font-figtree font-bold leading-none tracking-normal me-[10px]">GET STARTED</span>
      <Image src="/arrow-right.svg" width={8} height={8} alt="arrow"/>
    </button>
  )
}
