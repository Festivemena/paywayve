import Image from "next/image";
import { Vector2 } from "../../public";

function Individual() {
  return (
    <div className="w-full bg-white shadow-xl justify-between flex z-20 px-32 absolute">
      <div className="w-1/2 h-[150px] bg-white shadow-2xl rounded-lg -mt-64">
        
      </div>
      <div className="w-1/2 h-[150px] bg-white shadow-2xl  rounded-lg flex-1 -mt-64">
        <div className="w-full h-1\2 rounded-lg"></div>
        <div className="w-full h-1\2 rounded-lg"></div>
      </div>
    </div>
  );
}

export default function Testimonials() {
    return (
     <div className="bg-white h-full relative w-full h-96">
      <div className="w-full relative flex">
      <div className="w-1/2 h-full pt-28 top-0 left-0">
        <div className="w-full text-center text-[38px] font-bold">Don't Take Our Word For IT</div>
        <div className="w-ful text-center text-[26px]">Trust Our Customers</div>
      </div>
      <div className="w-1/2 pt-28  justify-right items-right text-right left-0">
        <Image alt="Vector" src={Vector2} />
      </div>
      </div>
      <Individual />
     </div>
    );
  }