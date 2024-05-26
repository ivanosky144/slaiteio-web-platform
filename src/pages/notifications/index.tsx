import Panel from "@/components/Panel";


export default function Notifications() {
    return (
        <div className="flex">
            <Panel />
            <div className="p-10 w-[100%] bg-gray-50 flex flex-col gap-20">
                <h1 className="text-6xl font-bold">Notifications</h1>
            </div>
        </div>
    )
}