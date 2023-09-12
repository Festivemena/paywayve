import React from "react";
import Image from 'next/image'
import { HeroPic, OneTap, Ui, Logo } from "../../public";

export default function Invite() {
    return (
      <div className="w-full">
     <div className="h-[500px] opacity-40 flex bg-[#9A11FF] w-full">
     </div>
     <div className="flex -mt-[420px] justify-center absolute">
     <div className="flex-1 w-1/2">
     <div className="text-[38px] pt-12 px-6 w-full font-semibold">
     The Financial Solution you have been wishing for.
   </div>
   <div className='text-white bg-[#9A11FF] w-full h-[62px] ml-6 shadow-2xl font-bold text-center py-4 rounded-md'>
          Join PayWayve Today
        </div>
   </div>
   <div className="w-1/2">
     <Image alt="UI" src={Ui} />
   </div>
     </div>
     </div>
    );
  }