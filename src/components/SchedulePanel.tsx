import 'tailwindcss/tailwind.css';
import { FaCalendarAlt } from "react-icons/fa";
import { HiCalendar } from "react-icons/hi";
import { MdDelete } from "react-icons/md";
import { useEffect, useState } from 'react';
import useAuthStore from '@/store/authStore';
import { deleteSchedule, getSchedulesByUser } from '@/services';
import { useRouter } from 'next/router';

export default function SchedulePanel() {

    const [schedules, setSchedules] = useState<any>(null);
    const user = useAuthStore((state) => state.user);
    const router = useRouter();
    const schedule_id = router.query.id;

    const getData = async () => {
        const response = await getSchedulesByUser(String(user?.email));
        const data = await response.json();
        setSchedules(data);   
    }

    const handleDelete = async (id: number) => {
        console.log("test")
        await deleteSchedule(id);
        getData();
    }

    useEffect(() => {
        getData();
    }, []);


    return (
        <div className="bg-[#008080] h-[100vh] w-[20vw] p-8 overflow-y-auto">
            <div className='flex flex-col'>
                <div className="flex items-center bg-green-500 p-5 rounded-xl gap-5 mb-10 hover:scale-105 cursor-pointer">
                    <FaCalendarAlt className='text-white w-5 h-5'/>
                    <p className='text-white font-semibold text-xl '>All Schedules</p>
                </div>
                <div className='flex flex-col gap-10 text-white text-lg bg-green-500 p-5 rounded-2xl font-bold'>
                    {schedules && (
                        <>
                            {schedules?.data?.map((schedule: any) => (
                                <div 
                                    className={`p-3 rounded-lg flex bg-green-600 items-center justify-between hover:scale-105 hover:opacity-70 cursor-pointer ${
                                        schedule.id === Number(schedule_id) ? "opacity-70" : "opacity-100"
                                      }`}
                                    key={schedule.id}
                                    onClick={() => router.push(`/schedule/${schedule.id}`)}
                                >
                                    <div className='flex gap-2 items-center'>
                                        <HiCalendar className='text-white w-5 h-5'/> 
                                        <p className=' text-center'>{schedule.name}</p>
                                    </div>
                                    <MdDelete 
                                        className='text-white w-8 h-8 cursor-pointer hover:bg-green-300 rounded-full p-1'
                                        onClick={() => handleDelete(schedule.id)}
                                    />
                                </div>
                            ))}
                        </>
                    )}
            </div>
            </div>
        </div>
    )
}