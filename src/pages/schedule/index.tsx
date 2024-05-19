import 'tailwindcss/tailwind.css';
import 'tailwind-scrollbar';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"
import MenuPanel from '@/components/MenuPanel';
import { PiPencilSimpleLineFill } from "react-icons/pi";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { useState } from 'react';

export default function Schedules() {

  return (
    <div className="min-h-screen flex relative">
        <MenuPanel />
      <div className="fixed bottom-0 right-0 mb-12 mr-12 flex gap-5">
        <button className='bg-[#008080] rounded-xl shadow-xl p-5 cursor-pointer'>
          <PiPencilSimpleLineFill className='w-20 h-20 text-white cursor-pointer'/>
        </button>
        <button className='bg-[#00b3b3] rounded-xl shadow-xl p-5 cursor-pointer'>
          <FaWandMagicSparkles className='w-20 h-20 text-white cursor-pointer'/>
        </button>
      </div>
      <div className="flex-grow max-h-[100vh] overflow-auto px-10 py-20">
        <FullCalendar 
          plugins={[ dayGridPlugin ]}
          initialView="dayGridMonth"
        />
      </div>
    </div>
  )
}
