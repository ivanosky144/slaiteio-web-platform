import 'tailwindcss/tailwind.css';
import 'tailwind-scrollbar';
import { useState, useMemo } from 'react';

import MenuPanel from '@/components/MenuPanel';
import ActivityCard from '@/components/ActivityCard';
import TaskForm from '@/components/TaskForm';
import EventForm from '@/components/EventForm';

import { FaPlus } from "react-icons/fa";
import { FaTasks } from "react-icons/fa"; 
import { FaNoteSticky } from "react-icons/fa6";
import dummyData from '@/data/dummyData';

export default function SchedulesCreate() {
  const [openActivityTypeOptions, setOpenActivityTypeOptions] = useState<boolean>(false);
  const [openForm, setOpenForm] = useState<string>("");

  const handleOpenForm = (formType: string) => () => {
    if (openForm !== formType) {
      setOpenForm(formType);
    }
    else {
      setOpenForm("");
    }
  }



  return (
    <div className="min-h-screen flex relative">
      <MenuPanel />
      <div className="py-20 px-20 flex justify-center w-[100vw]">
        <div className="p-10 rounded-xl shadow-2xl w-[50vw] flex">
          <form className='flex flex-col gap-5 flex-3'>
            <input type="text" placeholder='Add title' className='outline-none text-4xl font-semibold'/>
            <hr></hr>  
            <span 
              className='text-left font-bold text-white bg-[#008080] w-[10vw] p-2 rounded-md flex items-center gap-5 cursor-pointer mt-5  hover:scale-105'
              onClick={()=>setOpenActivityTypeOptions(!openActivityTypeOptions)}
            >
              <FaPlus className='text-white font-bold'/>
              Add activity
            </span>
              {openActivityTypeOptions && (
                  <div className="flex w-[10vw] text-center text-[#008080] justify-between">
                      <div className="bg-[#00b3b3] rounded-2xl px-4 py-2 font-bold cursor-pointer text-white flex gap-2 items-center hover:opacity-80" onClick={handleOpenForm("TASK")}>
                        <FaTasks className=''/>
                        <span>Task</span>
                      </div>
                      <div className="bg-[#00b3b3] rounded-2xl px-4 py-2 font-bold cursor-pointer text-white flex gap-2 items-center hover:opacity-80" onClick={handleOpenForm("EVENT")}>
                        <FaNoteSticky className=''/>
                        <span>Event</span>
                      </div>
                  </div>
              )}
              <hr></hr>
              <div className='flex flex-col gap-4'>
                {dummyData?.map((data) => (
                  <ActivityCard id={data.id} type={data.type} metadata={data.metadata}/>
                ))}
              </div>
          </form>
          {openForm === "TASK" && (
            <TaskForm />
          )}
          {openForm === "EVENT" && (
            <EventForm />
          )}

        </div>
      </div>
    </div>
  );
}
