import 'tailwindcss/tailwind.css';
import 'tailwind-scrollbar';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"
import SchedulePanel from '@/components/SchedulePanel';
import { PiPencilSimpleLineFill } from "react-icons/pi";
import { FaNoteSticky, FaWandMagicSparkles } from "react-icons/fa6";
import { useEffect, useState } from 'react';
import useAuthStore from '@/store/authStore';
import Panel from '@/components/Panel';
import { getSchedulesByUser } from '@/services';
import { useRouter } from 'next/router';
import { FaTasks } from 'react-icons/fa';

export default function Schedules() {

  const [schedules, setSchedules] = useState<any>(null);
  const user = useAuthStore((state) => state.user);
  const router = useRouter();
  
  const getData = async () => {
    const response = await getSchedulesByUser(String(user?.email), undefined, true);
    const data = await response.json();
    setSchedules(data?.data);
    console.log(schedules)
  }

  useEffect(() => {
    getData();
  }, []);

  const renderEventContent = (eventInfo: any) => {
    const type = eventInfo.event.extendedProps.type;

    if (type === 'TASK') {
      return (
        <div className="flex flex-col gap-1 px-2 py-1">
          <div className="flex items-center hover:opacity-90 font-bold">
            <FaTasks />
            <span className="ml-2">{eventInfo.event.title}</span>
          </div>
          <span className='font-bold'>{eventInfo.event.extendedProps.metadata?.due_time}</span>
        </div>
      )
    }
    else if (type === 'EVENT') {
      return (
        <div className='flex flex-col gap-1 px-2 py-1'>
          <div className="flex items-center hover:opacity-90 font-bold">
            <FaNoteSticky />
            <span className="ml-2">{eventInfo.event.title}</span>
          </div>
          <span className='font-bold'>{eventInfo.event.extendedProps.metadata?.start_time} - {eventInfo.event.extendedProps.metadata?.end_time}</span>
        </div>
      )
    }
  };

  return (
    <div className="min-h-screen flex relative">
        <Panel />
      <div className="fixed bottom-0 right-0 mb-12 mr-12 flex gap-5 z-10">
        <button className='bg-[#008080] rounded-xl shadow-xl p-5 cursor-pointer hover:scale-105 hover:opacity-90' onClick={() => router.push('/schedule/create')}>
          <PiPencilSimpleLineFill className='w-20 h-20 text-white cursor-pointer'/>
        </button>
        <button className='bg-[#00b3b3] rounded-xl shadow-xl p-5 cursor-pointer hover:scale-105 hover:opacity-90'>
          <FaWandMagicSparkles className='w-20 h-20 text-white cursor-pointer'/>
        </button>
      </div>
      <div className="flex-grow max-h-[100vh] overflow-auto px-10 py-20">
        <h1 className='text-3xl font-bold mb-5'>All schedules</h1>
        {schedules && (
          <>
            <FullCalendar 
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              events={schedules.flatMap((schedule: any) => 
                schedule.activities.map((activity: any) => ({
                  title: activity.type === 'TASK' ? activity.metadata.name : activity.metadata.title,
                  date: activity.date,
                  type: activity.type,
                  metadata: activity.metadata,
                  color: schedule.schedule.color || '#0000FF', // Use schedule's color or default to blue
                }))
              )}
              eventContent={renderEventContent} 
            />
          </>
        )}
      </div>
    </div>
  )
}
