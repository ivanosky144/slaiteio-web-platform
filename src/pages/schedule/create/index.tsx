import 'tailwindcss/tailwind.css';
import 'tailwind-scrollbar';

import MenuPanel from '@/components/MenuPanel';
import ScheduleForm from '@/components/ScheduleForm';
import { createSchedule } from '@/services';

export default function SchedulesCreate() {

  const submitHandler = async (payload: any) => {
    await createSchedule(payload);
  }

  return (
    <div className="min-h-screen flex relative">
      <MenuPanel />
      <div className="py-20 px-20 flex justify-center w-[100vw]">
        <ScheduleForm submitHandler={submitHandler}/>
      </div>
    </div>
  );
}
