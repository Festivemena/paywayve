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
        <div className="text-[20px]">Personal</div>
        <div>Personal</div>
        <div>Personal</div>
      </div>
      <div className="flex-1 text-white justify-center items-center">
      <div className="text-[20px]">Business</div>
        <div>Personal</div>
        <div>Personal</div>
        <div>Personal</div>
        <div>Personal</div>
      </div>
      <div className="flex-1 text-white justify-center items-center">
      <div className="text-[20px]">Company</div>
        <div>Personal</div>
        <div>Personal</div>
      </div>
      <div className="flex-1 text-white justify-center items-center">
      <div className="text-[20px]">Help</div>
        <div>Personal</div>
        <div>Personal</div>
        <div>Personal</div>
      </div>
      </div>
     </div>
    );
  }