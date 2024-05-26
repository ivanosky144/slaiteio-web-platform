import 'tailwindcss/tailwind.css';
import 'tailwind-scrollbar';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"
import MenuPanel from '@/components/SchedulePanel';
import { PiPencilSimpleLineFill } from "react-icons/pi";
import { FaTasks } from "react-icons/fa";
import { FaNoteSticky } from "react-icons/fa6";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getScheduleDetail } from '@/services';
import Panel from '@/components/Panel';

export default function Schedule() {

  const router = useRouter();
  const schedule_id = router.query.id;
  const [scheduleData, setScheduleData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  
  const getData = async () => {
    try {
      if (!schedule_id) return; 
      const response = await getScheduleDetail(Number(schedule_id));
      const data = await response.json();
      setScheduleData(data);
      setIsLoading(false);

    } catch(err) {
      setIsLoading(false);
      console.log('[error]', err);
    }
  }

  useEffect(() => {
    getData();
  }, [schedule_id]);

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
        {scheduleData && (
          <>
            <div className='flex justify-between mb-10'>
              <h1 className='text-3xl font-bold mb-5'>{scheduleData?.data?.name}</h1>
              <button 
                className='bg-[#008080] rounded-xl shadow-md p-4 cursor-pointer hover:scale-105 hover:opacity-90 text-white font-bold text-xl'
                onClick={() => router.push(`/schedule/update/${Number(schedule_id)}`)}
              >
                Edit this schedule
              </button>
            </div>
            <FullCalendar 
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              events={scheduleData?.activites?.map((activity: any) => ({
                title: activity.type === 'TASK' ? activity?.metadata?.name : activity?.metadata?.title,
                date: activity.date,
                type: activity.type,
                metadata: activity.metadata
              }))}
              eventContent={renderEventContent} 
            />
          </>
        )}
      </div>
    </div>
  )
}
