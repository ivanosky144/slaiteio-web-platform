import Panel from "@/components/Panel";
import { getEventsByUser, getTasksByUser } from "@/services";
import useAuthStore from "@/store/authStore";
import { useEffect, useState } from "react";


export default function Homepage() {

    const user = useAuthStore((state) => state.user);
    const [tasks, setTasks] = useState<any>();
    const [events, setEvents] = useState<any>();
    const email = String(user?.email);

    const getTasks = async () => {
        const response = await getTasksByUser(email);
        const data = await response.json();
        setTasks(data);
    }

    const getEvents = async () => {
        const response = await getEventsByUser(email);
        const data = await response.json();
        setEvents(data);
    }

    useEffect(() => {
        getTasks();
        getEvents();
    }, [user]);

    const formatDate = (date: string) => {
        const output = new Date(date);
        return output.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    }

    return (
        <div className="flex">
            <Panel />
            <div className="p-10 w-[100%] bg-gray-50 flex flex-col gap-20">
                <div className="flex justify-between items-center">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-6xl font-bold">Welcome, <span className="text-[#008080]">Ivan</span></h1>
                        <p className="font-semibold text-[#008080] text-2xl">Here's your schedule today</p>
                    </div>
                    <input type="text" className="bg-gray-200 outline-none p-4 rounded-md h-[50%] w-[40%]"/>
                </div>
                <div className="flex gap-10 w-[100%] h-[60%]">
                    <div className="bg-white rounded-xl p-4 shadow-md w-[100%]">
                        <h2 className="font-semibold text-xl">Your Events</h2>
                        <div className="flex flex-col gap-3 mt-4">
                            {events?.data?.slice(0,5).map((event: any) => (
                                <div className="bg-gray-50 p-2 rounded-md shadow-md flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <h3 className="font-semibold text-lg">{event.title}</h3>
                                        {event.start_time && (
                                            <p className="text-md">From {event.start_time} to {event.end_time}</p>
                                        )}
                                    </div>
                                    <p className="font-semibold text-lg">{formatDate(event.date)}</p>
                                </div>
                            ))}

                        </div>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-md w-[100%]">
                        <h2 className="font-semibold text-xl">Your Tasks</h2>
                        <div className="flex flex-col gap-3 mt-4">
                            {tasks?.data?.slice(0,5).map((task: any) => (
                                <div className="bg-gray-50 p-2 rounded-md shadow-md flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <h3 className="font-semibold text-lg">{task.name}</h3>
                                        {task.due_time && (
                                            <p className="text-md">Due {task.due_time}</p>
                                        )}
                                    </div>
                                    <p className="font-semibold text-lg">{formatDate(task.date)}</p>
                                </div>
                            ))}

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}