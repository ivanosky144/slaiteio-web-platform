import ActivityDetail from "@/components/ActivityDetail";
import Panel from "@/components/Panel";
import { IoSearchSharp } from "react-icons/io5";

import { getEventsByUser, getTasksByUser, getSchedulesByUser, getUserDetail } from "@/services";
import useAuthStore from "@/store/authStore";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";


export default function Homepage() {

    const user = useAuthStore((state) => state.user);
    const router = useRouter();
    const [tasks, setTasks] = useState<any>();
    const [events, setEvents] = useState<any>();
    const [userDetail, setUserDetail] = useState<any>();
    const [openDetail, setOpenDetail] = useState<boolean>(false);
    const [activityId, setActivityId] = useState<number>();
    const [activityType, setActivityType] = useState<string>("");
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [searchResults, setSearchResults] = useState<any>();
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

    const getUser = async () => {
        const response = await getUserDetail(email);
        const data = await response.json();
        setUserDetail(data?.data);
    }

    useEffect(() => {
        getTasks();
        getEvents();
        getUser();
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

    const handleEventDetail = (id: number) => {
        setActivityId(id);
        setActivityType("EVENT");
        setOpenDetail(true);
    }

    const handleTaskDetail = (id: number) => {
        setActivityId(id);
        setActivityType("TASK");
        setOpenDetail(true);
    }

    const getSearchResults = async (query: string) => {
        if (query) {
            const response = await getSchedulesByUser(email, query);
            const data = await response.json();
            setSearchResults(data?.data);
        } else {
            setSearchResults([]);
        }
    }

    const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);
    }

    useEffect(() => {
        getSearchResults(searchQuery);
    }, [searchQuery]);

    return (
        <div className="flex">
            <Panel />
            <div className="p-10 w-[100%] bg-gray-50 flex flex-col gap-20">
                <div className="flex justify-between items-center">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-6xl font-bold">Welcome, <span className="text-[#008080]">{userDetail?.username}</span></h1>
                        <p className="font-semibold text-[#008080] text-2xl">Here's your schedule today</p>
                    </div>
                    <div className="relative flex items-center bg-gray-200 outline-none p-4 rounded-md h-[50%] w-[40%]">
                        <IoSearchSharp />
                        <input 
                            type="text" 
                            className="bg-gray-200 outline-none p-4 rounded-md h-[50%] w-[40%] font-semibold"
                            placeholder="Search for schedules"
                            onChange={handleSearch}
                        />
                        {searchQuery && searchResults.length > 0 && (
                            <div className="absolute top-full w-full z-10 rounded-md bg-white shadow-md mt-2">
                                {searchResults.map((result: any) => (
                                    <div 
                                        className="p-3 hover:bg-gray-100 cursor-pointer" 
                                        key={result.id}
                                        onClick={() => router.push(`/schedule/${result.id}`)}
                                    >
                                        <h3>{result.name}</h3>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                <div className="flex gap-10 w-[100%] h-[60%]">
                    <div className="bg-white rounded-xl p-4 shadow-md w-[100%]">
                        <h2 className="font-semibold text-xl">Your Events</h2>
                        <div className="flex flex-col gap-3 mt-4">
                            {events?.data?.slice(0,5).map((event: any) => (
                                <div 
                                    className="bg-gray-50 p-2 rounded-md shadow-md flex items-center justify-between cursor-pointer hover:scale-105"
                                    onClick={() => handleEventDetail(event.id)}
                                >
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
                        {openDetail && <ActivityDetail id={activityId} type={activityType} onClose={() => setOpenDetail(false)}/>}
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-md w-[100%]">
                        <h2 className="font-semibold text-xl">Your Tasks</h2>
                        <div className="flex flex-col gap-3 mt-4">
                            {tasks?.data?.slice(0,5).map((task: any) => (
                                <div 
                                    className="bg-gray-50 p-2 rounded-md shadow-md flex items-center justify-between cursor-pointer hover:scale-105"
                                    onClick={() => handleTaskDetail(task.id)}
                                >
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