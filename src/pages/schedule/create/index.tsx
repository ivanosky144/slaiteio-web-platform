import 'tailwindcss/tailwind.css';
import 'tailwind-scrollbar';

import ScheduleForm from '@/components/ScheduleForm';
import { createSchedule } from '@/services';
import Panel from '@/components/Panel';
import { useRouter } from 'next/router';

export default function SchedulesCreate() {
  
  const router = useRouter();

  const submitHandler = async (payload: any) => {
    await createSchedule(payload);
    router.push('/schedule');
  }

  return (
    <div className="min-h-screen flex relative max-h-screen">
      <Panel />
      <div className="py-20 px-20 flex justify-center w-[100vw]">
        <ScheduleForm submitHandler={submitHandler}/>
      </div>
    </div>
  );
}
