import Image from 'next/image'
import phoneImg from '../../public/phone-mockup.png'

export default function PhoneMockup() {
  return (
    <div className="w-[666px] h-[679px]">
      <Image
        src={phoneImg}
        alt="Phone mockup"
        className="w-full h-auto drop-shadow-xl"
        priority
      />
    </div>
  )
}
