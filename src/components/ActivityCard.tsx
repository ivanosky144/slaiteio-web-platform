import 'tailwindcss/tailwind.css';
import { FaTasks } from "react-icons/fa"; 
import { FaNoteSticky } from "react-icons/fa6";

interface ActivityData {
    id: number
    type: string
    metadata : any
}

export default function ActivityCard({ id, type, metadata } : ActivityData) {

    return (
        <div className='p-2 rounded-xl border-4 border-gray-500' key={id}>
            {type === 'TASK' ? (
            <p className='flex items-center gap-2'>
                <FaTasks className='text-gray-600'/>
                <p className='font-semibold text-gray-600'>{metadata?.name}</p>
            </p>
            ) : type === 'EVENT' ? (
            <p className='flex items-center gap-2'>
                <FaNoteSticky className='text-gray-600'/>
                <p className='font-semibold text-gray-600'>{metadata?.title}</p>
            </p>
            ) : null}
        </div>
    )
}