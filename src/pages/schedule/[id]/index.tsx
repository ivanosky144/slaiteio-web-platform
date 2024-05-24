import 'tailwindcss/tailwind.css';
import 'tailwind-scrollbar';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"
import MenuPanel from '@/components/MenuPanel';
import { PiPencilSimpleLineFill } from "react-icons/pi";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getScheduleDetail } from '@/services';

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
  }, [schedule_id])

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
        {scheduleData && (
          <>
            <h1 className='text-3xl font-bold mb-5'>{scheduleData?.data?.name}</h1>
            <FullCalendar 
              plugins={[ dayGridPlugin ]}
              initialView="dayGridMonth"
              events={scheduleData?.activites?.map((activity: any) => ({
                title: activity.type === 'TASK'? activity.task.name : activity.event.title,
                date: activity.date
              }))}
            />
          </>
        )}
      </div>
    </div>
  )
}
