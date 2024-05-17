import 'tailwindcss/tailwind.css';

export default function TaskForm() {
    return (
        <form className='flex-2 bg-slate-50 p-3 rounded-md ml-10 w-[30vw] flex flex-col justify-between'>
            <div className="flex flex-col gap-5 px-3 py-3">
                <h2 className='font-bold text-xl'>Task: </h2>
                <input type="text" placeholder='Add task name' className='bg-slate-100 p-3 rounded-xl outline-none font-semibold text-black'/>
                <textarea placeholder='Add task detail' className='bg-slate-100 p-3 rounded-xl outline-none font-semibold text-black h-32'/>
                <input type="date" className='bg-slate-100 font-semibold text-black h-16 p-2 outline-none'/>
            </div>
            <div className='flex justify-between p-4'>
                <button className='bg-red-800 px-3 py-2 font-bold text-white rounded-xl hover:scale-105 hover:bg-red-700'>Clear Task</button>
                <button className='bg-yellow-800 px-3 py-2 font-bold text-white rounded-xl hover:scale-105 hover:bg-yellow-700'>Save Changes</button>
            </div>
        </form>
    )
}