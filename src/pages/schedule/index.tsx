import 'tailwindcss/tailwind.css';
import 'tailwind-scrollbar';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"

export default function Schedules() {
  return (
    <div className="min-h-screen flex">
      <div className="bg-[#008080] shadow-xl  h-[100vh] w-[20vw] p-10 overflow-y-auto">
        <div className='flex flex-col gap-20'>
          <h1 className='text-white font-bold text-4xl'>SLAITE.IO</h1>
          <p className='text-white font-semibold text-xl bg-white p-5 rounded-2xl bg-opacity-20'>All Schedules</p>
          <div className='flex flex-col gap-10 text-white font-semibold text-lg bg-white p-5 rounded-2xl bg-opacity-20'>
            <p className='bg-white p-3 rounded-2xl bg-opacity-30 text-center'>Schedule 1</p>
            <p className='bg-white p-3 rounded-2xl bg-opacity-30 text-center'>Schedule 2</p>
            <p className='bg-white p-3 rounded-2xl bg-opacity-30 text-center'>Schedule 3</p>
            <p className='bg-white p-3 rounded-2xl bg-opacity-30 text-center'>Schedule 4</p>
            <p className='bg-white p-3 rounded-2xl bg-opacity-30 text-center'>Schedule 5</p>
            <p className='bg-white p-3 rounded-2xl bg-opacity-30 text-center'>Schedule 6</p>
            <p className='bg-white p-3 rounded-2xl bg-opacity-30 text-center'>Schedule 7</p>
            <p className='bg-white p-3 rounded-2xl bg-opacity-30 text-center'>Schedule 8</p>
            <p className='bg-white p-3 rounded-2xl bg-opacity-30 text-center'>Schedule 9</p>
            <p className='bg-white p-3 rounded-2xl bg-opacity-30 text-center'>Schedule 10</p>
          </div>
        </div>
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
