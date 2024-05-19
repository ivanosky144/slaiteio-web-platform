import 'tailwindcss/tailwind.css';
import { FaTasks } from "react-icons/fa"; 
import { FaNoteSticky } from "react-icons/fa6";

interface ActivityData {
    type: string
    metadata : any
}

export default function ActivityCard({ type, metadata } : ActivityData) {

    return (
        <div className='p-2 rounded-xl border-4 border-gray-500 hover:scale-105 cursor-pointer hover:border-gray-400' >
            {type === 'TASK' ? (
            <div className='flex items-center gap-2'>
                <FaTasks className='text-gray-600'/>
                <p className='font-semibold text-gray-600'>{metadata?.name}</p>
            </div>
            ) : type === 'EVENT' ? (
            <div className='flex items-center gap-2'>
                <FaNoteSticky className='text-gray-600'/>
                <p className='font-semibold text-gray-600'>{metadata?.title}</p>
            </div>
            ) : null}
        </div>
    )
}