import { useState } from 'react';
import 'tailwindcss/tailwind.css';

interface EventFormProps {
    onAddActivity: (newEvent: any) => void
}

export default function EventForm({ onAddActivity }: EventFormProps) {

    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [time, setTime] = useState<string>("");

    const handleSave = () => {
        const newEvent = {
            type: 'EVENT',
            metadata: {
                title,
                description
            }
        }
        onAddActivity(newEvent);
    }

    return (
        <div className='flex-2 bg-slate-50 p-3 rounded-md ml-10 w-[30vw] flex flex-col justify-between'>
            <div className="flex flex-col gap-5 px-3 py-3">
                <h2 className='font-bold text-xl'>Event: </h2>
                <input 
                    type="text" 
                    placeholder='Add event title' 
                    className='bg-slate-100 p-3 rounded-xl outline-none font-semibold text-black' 
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea 
                    placeholder='Add event description' 
                    className='bg-slate-100 p-3 rounded-xl outline-none font-semibold text-black h-32'
                    onChange={(e) => setDescription(e.target.value)}
                />
                <input 
                    type="date" 
                    className='bg-slate-100 font-semibold text-black h-16 p-2 outline-none'
                    onChange={(e) => setTime(e.target.value)}/>
            </div>
            <div className='flex justify-between p-4'>
                <button 
                    className='bg-red-800 py-2 px-3 font-bold text-white rounded-xl' 
                    onClick={() => {
                        setTitle("");
                        setDescription("");
                        setTime("");
                }}>
                    Clear Event
                </button>
                <button className='bg-yellow-800 py-2 px-3 font-bold text-white rounded-xl' onClick={handleSave}>Save Changes</button>
            </div>
        </div>
    )
}