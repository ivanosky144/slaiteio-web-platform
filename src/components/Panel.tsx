import { FaHome } from "react-icons/fa";
import { IoCalendar } from "react-icons/io5";
import { IoSettings } from "react-icons/io5";
import { RiLogoutBoxFill } from "react-icons/ri";
import { IoIosNotifications } from "react-icons/io";
import { useRouter } from "next/router";
import SchedulePanel from "./SchedulePanel";
import { useState } from "react";


export default function Panel() {

    const router = useRouter();
    const [isCalendarHovered, setIsCalendarHovered] = useState(false);


    return (   
        <div className="flex">
            <div className="bg-[#008080] h-[100vh] w-[6vw] p-5">
                <div className="flex flex-col gap-16 items-center mt-52">
                    <FaHome className="w-10 h-10 text-white cursor-pointer hover:opacity-90" onClick={() => router.push("/home")}/>
                    <IoCalendar 
                        className="w-10 h-10 text-white cursor-pointer hover:opacity-90" 
                        onClick={() => setIsCalendarHovered(!isCalendarHovered)}
                    />
                    <IoIosNotifications className="w-10 h-10 text-white cursor-pointer hover:opacity-90" onClick={() => router.push("/notifications")}/>
                </div>
                <div className="flex flex-col gap-12 items-center mt-60">
                    <IoSettings className="w-10 h-10 text-white cursor-pointer hover:opacity-90" onClick={() => router.push("/settings")}/>
                    <RiLogoutBoxFill className="w-10 h-10 text-white cursor-pointer hover:opacity-90"/>
                </div>
            </div>
            {isCalendarHovered &&  <SchedulePanel />}
        </div> 
    )
}