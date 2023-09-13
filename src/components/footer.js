import Image from "next/image";
import { Logo } from "../../public";


export default function Footer() {
    return (
     <div className="bg-[#000212] flex-1 w-full h-96">
      <div className="flex w-full text-center px-32 pt-12 justify-between">
      <div className="">
        <Image alt="logo" src={Logo} />
      </div>
      <div className="flex-1 text-white justify-center items-center">
        <div className="text-[20px] font-bold">Personal</div>
        <div className="text-[16px] font-light">Discover</div>
        <div className="text-[16px] font-light">Transfer and Spend</div>
        <div className="text-[16px] font-light">Piggy Save</div>
        <div className="text-[16px] font-light">Buy Airtime</div>
        <div className="text-[16px] font-light">Buy Data</div>
        <div className="text-[16px] font-light">Get Card</div>
      </div>
      <div className="flex-1 text-white justify-center items-center">
      <div className="text-[20px] font-bold">Business</div>
        <div className="text-[16px] font-light">Discover</div>
        <div className="text-[16px] font-light">Business Integration</div>
        <div className="text-[16px] font-light">One Tap Device</div>
        <div className="text-[16px] font-light">Inventory</div>
      </div>
      <div className="flex-1 text-white justify-center items-center">
      <div className="text-[20px] font-bold">Company</div>
        <div className="text-[16px] font-light">Blog</div>
        <div className="text-[16px] font-light">Press & Recognition</div>
        <div className="text-[16px] font-light">Join Our Team</div>
        <div className="text-[16px] font-light">About Us</div>
      </div>
      <div className="flex-1 text-white justify-center items-center">
      <div className="text-[20px] font-bold">Help</div>
        <div className="text-[16px] font-light">Personal</div>
        <div className="text-[16px] font-light">Personal</div>
        <div className="text-[16px] font-light">Personal</div>
      </div>
      </div>
     </div>
    );
  }