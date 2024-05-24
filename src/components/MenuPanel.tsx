import 'tailwindcss/tailwind.css';
import { FaCalendarAlt } from "react-icons/fa";
import { HiCalendar } from "react-icons/hi";
import { useEffect, useState } from 'react';
import useAuthStore from '@/store/authStore';
import { getSchedulesByUser } from '@/services';
import { useRouter } from 'next/router';

export default function MenuPanel() {

    const [schedules, setSchedules] = useState<any>(null);
    const user = useAuthStore((state) => state.user);
    const router = useRouter();

    const getData = async () => {
        const response = await getSchedulesByUser('test12345@gmail.com');
        const data = await response.json();
        setSchedules(data);   
    }

    useEffect(() => {
        getData();
    }, [])


    return (
        <div className="bg-gray-100 h-[100vh] w-[20vw] p-8 overflow-y-auto m-5 rounded-md">
            <div className='flex flex-col'>
                <h1 className='text-[#008080]    font-bold text-4xl'>SLAITE.IO</h1>
                <p className='mt-20 mb-5 font-bold text-lg text-gray-600'>MENU</p>
                <div className="flex items-center bg-[#008080] p-5 rounded-xl gap-5 mb-10 hover:scale-105 cursor-pointer">
                    <FaCalendarAlt className='text-white w-5 h-5'/>
                    <p className='text-white font-semibold text-xl'>All Schedules</p>
                </div>
                <div className='flex flex-col gap-10 text-white text-lg bg-[#008080] p-5 rounded-2xl bg-opacity-10 font-bold'>
                    {schedules && (
                        <>
                            {schedules?.data?.map((schedule: any) => (
                                <div 
                                    className="bg-[#00b3b3] p-3 rounded-lg flex items-center gap-5 hover:scale-105 cursor-pointer" 
                                    key={schedule.id}
                                    onClick={() => router.push(`/schedule/${schedule.id}`)}
                                >
                                    <HiCalendar className='text-white w-5 h-5'/> 
                                    <p className=' text-center'>{schedule.name}</p>
                                </div>
                            ))}
                        </>
                    )}
            </div>
            </div>
        </div>
    )
}