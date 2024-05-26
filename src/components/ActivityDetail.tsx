import { getEventDetail, getTaskDetail } from "@/services";
import { useEffect, useState } from "react";
import { CiTextAlignLeft } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
import { FaPlus, FaTasks } from "react-icons/fa";
import { FaNoteSticky } from "react-icons/fa6";

interface ActivityDetailProps {
    id?: number;
    type?: string;
    onClose: () => void;
}

export default function ActivityDetail({ id, type, onClose }: ActivityDetailProps) {
    const [activityDetail, setActivityDetail] = useState<any>();

    const getData = async () => {
        if (!id) return;

        if (type === 'EVENT') {
            const response = await getEventDetail(id);
            const data = await response.json();
            setActivityDetail(data?.data);
        }
        else if (type === 'TASK') {
            const response = await getTaskDetail(id);
            const data = await response.json();
            setActivityDetail(data?.data);
        }
};

    useEffect(() => {
        getData();
    }, [id]);

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
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
            <div className="bg-white rounded-lg p-8 relative w-[30%]">
                <button 
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-2xl hover:bg-red-400 rounded-full p-2"
                    onClick={onClose}
                >
                    &times;
                </button>
                {activityDetail && type === 'EVENT' ? (
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-5">
                                <FaNoteSticky className="text-xl"/>
                                <h2 className="text-2xl font-bold">{activityDetail?.title || 'Event Detail'}</h2>
                            </div>
                            <div className="">{formatDate(activityDetail?.date)}</div>
                            <div className="">{activityDetail?.start_time} - {activityDetail?.end_time}</div>
                        </div>
                        <hr/>
                        <div className="flex flex-col gap-3">
                            <div className="flex gap-2 items-center">
                                <CiTextAlignLeft className="text-xl"/>
                                <p className="text-lg">{activityDetail?.description}</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <IoIosNotifications className="text-xl"/>
                                <p className="text-lg">30 minutes before</p>
                            </div>
                        </div>
                    </div>
                ) : activityDetail && type === 'TASK' ? (
                    <div>
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-5">
                                    <FaTasks className="text-xl"/>
                                    <h2 className="text-2xl font-bold">{activityDetail?.name || 'Task Detail'}</h2>
                                </div>
                                <div className="">{formatDate(activityDetail?.date)}</div>
                                <div className="">Due {activityDetail?.due_time}</div>
                            </div>
                            <hr/>
                            <div className="flex flex-col gap-3">
                                <div className="flex gap-2 items-center">
                                    <CiTextAlignLeft className="text-xl"/>
                                    <p className="text-lg">{activityDetail?.detail}</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <IoIosNotifications className="text-xl"/>
                                    <p className="text-lg">30 minutes before</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : 
                    <p>Loading...</p>
                }
            </div>
        </div>
    );
}
