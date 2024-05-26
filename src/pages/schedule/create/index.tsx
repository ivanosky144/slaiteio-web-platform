import 'tailwindcss/tailwind.css';
import 'tailwind-scrollbar';

import ScheduleForm from '@/components/ScheduleForm';
import { createSchedule } from '@/services';
import Panel from '@/components/Panel';

export default function SchedulesCreate() {

  const submitHandler = async (payload: any) => {
    await createSchedule(payload);
  }

  return (
    <div className="min-h-screen flex relative">
      <Panel />
      <div className="py-20 px-20 flex justify-center w-[100vw]">
        <ScheduleForm submitHandler={submitHandler}/>
      </div>
    </div>
  );
}
