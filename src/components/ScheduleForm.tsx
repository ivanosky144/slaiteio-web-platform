import ActivityCard from '@/components/ActivityCard';
import TaskForm from '@/components/TaskForm';
import EventForm from '@/components/EventForm';

import { FaPlus, FaTasks } from "react-icons/fa";
import { FaNoteSticky } from "react-icons/fa6";
import dummyData from '@/data/dummyData';
import { useEffect, useState } from 'react';
import { getScheduleDetail } from '@/services';

interface ScheduleFormProps {
    id?: number | null
    submitHandler: (payload: any) => void
}

export default function ScheduleForm({ id = null, submitHandler}: ScheduleFormProps) {
    const [openActivityTypeOptions, setOpenActivityTypeOptions] = useState<boolean>(false);
    const [openForm, setOpenForm] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [activities, setActivities] = useState(dummyData);
    
    const handleOpenForm = (formType: string) => () => {
        if (openForm !== formType) {
            setOpenForm(formType);
        } else {
            setOpenForm("");
        }
    }

    const handleAddActivity = (newActivity: any) => {
        setActivities([...activities, newActivity]);
        setOpenForm("");
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const payload = {
            user_id: 1,
            name: name,
            activities: activities
        }
        submitHandler(payload)
    }

    const getData = async () => {
        if (id) {
            const response = await getScheduleDetail(id);
            const data = await response.json();
            setName(data?.data?.name);
            setActivities(data?.activites);
        }
    }

    useEffect(() => {
        getData();
    }, [id])

    return (
        <form className="p-10 rounded-xl shadow-2xl w-[50vw] flex" onSubmit={handleSubmit}>
            <div className='flex flex-col gap-5 flex-3 overflow-y'>
                <input 
                    type="text" 
                    placeholder='Add title' 
                    className='outline-none text-4xl font-semibold'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <hr />  
                <span 
                    className='text-left font-bold text-white bg-[#008080] w-[10vw] p-2 rounded-md flex items-center gap-5 cursor-pointer mt-5 hover:scale-105'
                    onClick={() => setOpenActivityTypeOptions(!openActivityTypeOptions)}
                >
                    <FaPlus className='text-white font-bold'/>
                    Add activity
                </span>
                {openActivityTypeOptions && (
                    <div className="flex w-[10vw] text-center text-[#008080] justify-between">
                        <div className="bg-[#00b3b3] rounded-2xl px-4 py-2 font-bold cursor-pointer text-white flex gap-2 items-center hover:opacity-80" onClick={handleOpenForm("TASK")}>
                            <FaTasks />
                            <span>Task</span>
                        </div>
                        <div className="bg-[#00b3b3] rounded-2xl px-4 py-2 font-bold cursor-pointer text-white flex gap-2 items-center hover:opacity-80" onClick={handleOpenForm("EVENT")}>
                            <FaNoteSticky />
                            <span>Event</span>
                        </div>
                    </div>
                )}
                <hr />
                <div className='flex flex-col gap-4'>
                    {activities?.map((data, index) => (
                        <ActivityCard key={index} type={data.type} metadata={data.metadata} />
                    ))}
                </div>
                <div className="flex justify-between mt-24">
                    <button className='rounded-md py-3 px-2 w-[25%] bg-gray-200 text-black font-bold hover:scale-105'>Delete</button>
                    <button className='rounded-md py-3 px-2 w-[25%] bg-[#008080] text-white font-bold hover:scale-105'>Add</button>
                </div>
            </div>
            {openForm === "TASK" && (
                <TaskForm onAddActivity={handleAddActivity} />
            )}
            {openForm === "EVENT" && (
                <EventForm onAddActivity={handleAddActivity} />
            )}
        </form>
    )
}
