import { useState } from 'react';
import { IoIosNotifications } from "react-icons/io";

import 'tailwindcss/tailwind.css';

interface TaskFormProps {
    onAddActivity: (newTask: any) => void
}

interface Notification {
    message: string;
    status: string;
    time: string;
}

export default function TaskForm({ onAddActivity }: TaskFormProps) {

    const [name, setName] = useState<string>("");
    const [detail, setDetail] = useState<string>("");
    const [time, setTime] = useState<string>("00:00");
    const [date, setDate] = useState<string>("");
    const [repeatInterval, setRepeatInterval] = useState<string>("Once");
    const [openNotificationOptions, setOpenNotificationOptions] = useState<boolean>(false);
    const [notifications, setNotifications] = useState<Notification[]>([]);

    const handleSave = () => {
        const newTask: any = {
            date: date,
            type: 'TASK',
            repeat_interval: repeatInterval,
            metadata: {
                name: name,
                detail: detail,
                due_time: time 
            },
            notifications: notifications
        };

        onAddActivity(newTask);
        setName("");
        setDetail("");
        setTime("");
        setNotifications([]);
    }

    const handleAddNotifications = (notification: string) => {
        const message = formatNotificationLabel(notification);
        const time = calculateNotificationTime(notification);
        const notificationPayload = {
            message: message,
            time: time,
            status: 'HOLD'
        }
        setNotifications(prevNotifications => [...prevNotifications, notificationPayload]);
    }

    const formatNotificationLabel = (input: string): string => {
        const timeMatch = input.match(/(\d+)([dhm])/);
    
        if (timeMatch) {
            const value = parseInt(timeMatch[1]);
            const unit = timeMatch[2];
    
            switch (unit) {
                case 'h':
                    return `${value} hour${value > 1 ? 's' : ''} before`;
                case 'm':
                    return `${value} minute${value > 1 ? 's' : ''} before`;
                case 'd':
                    return `${value} day${value > 1 ? 's' : ''} before`;
                default:
                    return '';
            }
        }
    
        return '';
    }

    const calculateNotificationTime = (value: string) => {
        const notificationTime = new Date(`${date}T${time}`);

        const daysMatch = value.match(/(\d+)d/);
        const hoursMatch = value.match(/(\d+)h/);
        const minutesMatch = value.match(/(\d+)m/);
        
        if (daysMatch) {
            const days = parseInt(daysMatch[1]);
            notificationTime.setDate(notificationTime.getDate() - days);
        }

        if (hoursMatch) {
            const hours = parseInt(hoursMatch[1]);
            notificationTime.setHours(notificationTime.getHours() - hours);
        }

        if (minutesMatch) {
            const minutes = parseInt(minutesMatch[1]);
            notificationTime.setMinutes(notificationTime.getMinutes() - minutes);
        }

        return notificationTime.toISOString();
    }

    return (
        <div className='relative flex-2 bg-slate-50 p-3 rounded-md ml-10 w-[30vw] flex flex-col justify-between max-h-[90%] overflow-y-auto overflow-x-hidden'>
            <div className="relative flex flex-col gap-5 px-3 py-3">
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
                    value={date}
                    className='bg-slate-100 font-semibold text-black h-18 p-2 outline-none cursor-pointer'
                    onChange={(e) => setDate(e.target.value)}
                />
                <input 
                    type="time" 
                    value={time}
                    className='bg-slate-100 font-semibold text-black h-16 p-2 outline-none cursor-pointer'
                    onChange={(e) => setTime(e.target.value)}
                />
                <select
                    value={repeatInterval}
                    className='bg-slate-100 font-semibold text-black h-16 p-2 outline-none cursor-pointer'
                    onChange={(e) => setRepeatInterval(e.target.value)}
                >
                    <option value="Once" className='bg-slate-100 font-semibold'>Does not repeat</option>
                    <option value="Daily">Every day</option>
                    <option value="Weekly">Every week</option>
                    <option value="Monthly">Every month</option>
                </select>
                <div className="flex p-2 items-center bg-slate-100 cursor-pointer hover:bg-slate-200 rounded-md gap-2">
                    <IoIosNotifications className='text-xl'/>
                    <div className="flex flex-col justify-center">
                        <div className="flex flex-col gap-4 p-2">
                            {notifications?.map((notification) => (
                                <div className="font-semibold">{notification.message}</div>
                            ))}
                        </div>
                        <div 
                            className="text-black font-semibold p-2 rounded-md hover:bg-slate-300 w-[100%]"
                            onClick={() => setOpenNotificationOptions(!openNotificationOptions)}
                        >
                            Add Notification
                        </div>
                    </div>
                </div>
                {openNotificationOptions && (
                    <div className="fixed top-0 left-3/4 bg-white p-4 shadow-md rounded-md w-[20%] mt-20 ml-20 z-50">
                        <p className='font-semibold'>Notification Options</p>
                        <div className="flex flex-col gap-2 mt-5">
                            <option 
                                value="5h" 
                                className='p-3 font-semibold rounded-md bg-gray-200 cursor-pointer hover:bg-gray-300'
                                onClick={() => handleAddNotifications("5h")}
                            >
                                5 hours before
                            </option>
                            <option 
                                value="4h" 
                                className='p-3 font-semibold rounded-md bg-gray-200 cursor-pointer hover:bg-gray-300'
                                onClick={() => handleAddNotifications("4h")}
                            >
                                4 hours before
                            </option>
                            <option 
                                value="3h" 
                                className='p-3 font-semibold rounded-md bg-gray-200 cursor-pointer hover:bg-gray-300'
                                onClick={() => handleAddNotifications("3h")}

                            >
                                3 hours before
                            </option>
                            <option 
                                value="2h" 
                                className='p-3 font-semibold rounded-md bg-gray-200 cursor-pointer hover:bg-gray-300'
                                onClick={() => handleAddNotifications("2h")}

                            >
                                2 hours before
                            </option>
                            <option 
                                value="30m" 
                                className='p-3 font-semibold rounded-md bg-gray-200 cursor-pointer hover:bg-gray-300'
                                onClick={() => handleAddNotifications("30m")}

                            >
                                30 minutes before
                            </option>

                        </div>
                    </div>
                )}
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
