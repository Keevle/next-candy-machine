/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { useEffect } from "react";


export default function CountDownClockTS() {
   

  useEffect(() => {
   // UpdateProps()
}, []);
  return (
<div className="min-w-screen min-h-screen flex items-top justify-center px-5 py-5" x-data="beer()" x-init="start()">
    <div className="text-yellow-100">
        <h1 className="text-3xl text-center mb-3 font-extralight">When will pubs open in England?*</h1>
        <div className="text-6xl text-center flex w-full items-center justify-center">
            <div className="text-2xl mr-1 font-extralight">in</div>
            <div className="w-24 mx-1 p-2 bg-white text-yellow-500 rounded-lg">
                <div className="font-mono leading-none" x-text="days">00</div>
                <div className="font-mono uppercase text-sm leading-none">Days</div>
            </div>
            <div className="w-24 mx-1 p-2 bg-white text-yellow-500 rounded-lg">
                <div className="font-mono leading-none" x-text="hours">00</div>
                <div className="font-mono uppercase text-sm leading-none">Hours</div>
            </div>
            <div className="w-24 mx-1 p-2 bg-white text-yellow-500 rounded-lg">
                <div className="font-mono leading-none" x-text="minutes">00</div>
                <div className="font-mono uppercase text-sm leading-none">Minutes</div>
            </div>
            <div className="text-2xl mx-1 font-extralight">and</div>
            <div className="w-24 mx-1 p-2 bg-white text-yellow-500 rounded-lg">
                <div className="font-mono leading-none" x-text="seconds">00</div>
                <div className="font-mono uppercase text-sm leading-none">Seconds</div>
            </div>
        </div>
        
    </div>
</div>

  );
}
