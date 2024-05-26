import Panel from "@/components/Panel";

export default function Settings() {
    return (
        <div className="flex">
            <Panel />
            <div className="p-10 w-[100%] bg-gray-50 flex flex-col gap-20">
                <h1 className="text-6xl font-bold">Settings</h1>
                <div className="flex flex-col gap-32 w-[40%]">
                    <div className="">
                        <p className="text-2xl">Your Profile</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-2xl">Theme</p>
                        <select name="" id="" className="w-[50%] outline-none border-gray-200 rounded-sm shadow-md p-4 font-semibold text-lg">
                            <option value="" className="text-lg font-semibold">Light</option>
                            <option value="" className="text-lg font-semibold">Dark</option>
                        </select>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-2xl">Language</p>
                        <select name="" id="" className="w-[50%] outline-none border-gray-200 rounded-sm shadow-md p-4 font-semibold text-lg">
                            <option value="" className="text-lg font-semibold">Indonesian</option>
                            <option value="" className="text-lg font-semibold">English</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}