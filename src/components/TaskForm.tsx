import { useState } from 'react';
import 'tailwindcss/tailwind.css';

interface TaskFormProps {
    onAddActivity: (newTask: any) => void
}

export default function TaskForm({ onAddActivity }: TaskFormProps) {

    const [name, setName] = useState<string>("");
    const [detail, setDetail] = useState<string>("");
    const [time, setTime] = useState<string>("");

    const handleSave = () => {
        const newTask = {
            type: 'TASK',
            metadata: {
                name,
                detail,
                time 
            }
        }
        onAddActivity(newTask);
        setName("");
        setDetail("");
        setTime("");
    }

    return (
        <div className='flex-2 bg-slate-50 p-3 rounded-md ml-10 w-[30vw] flex flex-col justify-between'>
            <div className="flex flex-col gap-5 px-3 py-3">
                <h2 className='font-bold text-xl'>Task: </h2>
                <input 
                    type="text" 
                    value={name}
                    placeholder='Add task name' 
                    className='bg-slate-100 p-3 rounded-xl outline-none font-semibold text-black' 
                    onChange={(e) => setName(e.target.value)}
                />
                <textarea 
                    value={detail}
                    placeholder='Add task detail' 
                    className='bg-slate-100 p-3 rounded-xl outline-none font-semibold text-black h-32'
                    onChange={(e) => setDetail(e.target.value)}
                />
                <input 
                    type="date" 
                    value={time}
                    className='bg-slate-100 font-semibold text-black h-16 p-2 outline-none'
                    onChange={(e) => setTime(e.target.value)}
                />
            </div>
            <div className='flex justify-between p-4'>
                <button 
                    type="button"
                    className='bg-red-800 py-2 px-3 font-bold text-white rounded-xl' 
                    onClick={() => {
                        setName("");
                        setDetail("");
                        setTime("");
                }}>
                    Clear Task
                </button>
                <button 
                    type="button" 
                    className='bg-yellow-800 py-2 px-3 font-bold text-white rounded-xl' 
                    onClick={handleSave}
                >
                    Save Changes
                </button>
            </div>
        </div>
    )
}
