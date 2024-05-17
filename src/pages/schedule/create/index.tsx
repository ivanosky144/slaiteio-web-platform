import 'tailwindcss/tailwind.css';
import 'tailwind-scrollbar';
import MenuPanel from '@/components/MenuPanel';
import { FaPlus } from "react-icons/fa";
import { FaTasks } from "react-icons/fa"; 
import { FaNoteSticky } from "react-icons/fa6";
import { useState, useMemo } from 'react';

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
              className='text-left font-bold text-white bg-[#008080] w-[10vw] p-2 rounded-md flex items-center gap-5 cursor-pointer mt-5'
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
          </form>
          {openForm === "TASK" && (
            <form className='flex-2 bg-slate-100 p-3 rounded-md ml-10 w-[30vw] opacity-50 flex flex-col justify-between'>
              <div className="flex flex-col gap-5">
                <h2 className='font-bold text-xl'>Task: </h2>
                <input type="text" placeholder='Add task name' className='bg-slate-200 p-3 rounded-xl outline-none font-semibold text-black'/>
                <textarea placeholder='Add task detail' className='bg-slate-200 p-3 rounded-xl outline-none font-semibold text-black h-32'/>
                <div></div>
              </div>
              <div className='flex justify-between p-4'>
                <button className='bg-red-800 p-2 font-bold text-white rounded-xl'>Clear Task</button>
                <button className='bg-yellow-800 p-2 font-bold text-white rounded-xl'>Save Changes</button>
              </div>
            </form>
          )}
          {openForm === "EVENT" && (
            <form className='flex-2 bg-slate-100 p-3 rounded-md ml-10 w-[30vw] opacity-50 flex flex-col gap-5'>
              <h2 className='font-bold text-xl'>Event: </h2>
              <input type="text" placeholder='Add event title' className='bg-slate-200 p-3 rounded-xl outline-none font-semibold text-black'/>
              <textarea placeholder='Add description' className='bg-slate-200 p-3 rounded-xl outline-none font-semibold text-black h-32'/>
            </form>
          )}

        </div>
      </div>
    </div>
  );
}
