import React from "react";
import Image from 'next/image'
import { HeroPic, OneTap, Ui, Logo } from "../../public";

function Explainer() {
    return (
        <div className="mt-6">
        <div className="w-full justify-between px-52 text-center flex">
        <div className="w-2/3 pt-36">
            <div className="font-bold text-[48px]">One Card, Endless Possibilities</div>
            <div>Introducing the Payway Card – your gateway to seamless transactions. With a simple tap, you can unlock a world of convenience.</div>
        </div>
        <div className='pl-12 w-1/3'>
          <Image alt="OneTap" src={OneTap} />
        </div>
      </div>
        </div>
    )
}

export default function Carousel() {
  return (
   <div className="bg-[#000212] text-white pt-[60px] text-center rounded-t-[50px] -mt-[270px] w-full h-[1000px]">
    <div className="font-bold px-80 text-[54px]">Unlike Any Financial Solution You’ve Used Before</div>
    <div className="px-[400px] pt-7">Designed to the last pixel and engineered with unforgiving precision, PayWayve combines UI elegance with world-class performance.</div>
    <div className="w-full items-center justify-center text-center">
        <Explainer />
    </div>
   </div>
  );
}