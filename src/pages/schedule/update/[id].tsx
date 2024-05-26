import 'tailwindcss/tailwind.css';
import 'tailwind-scrollbar';

import ScheduleForm from '@/components/ScheduleForm';
import { updateSchedule } from '@/services';
import { useRouter } from 'next/router';
import Panel from '@/components/Panel';

export default function ScheduleUpdate() {
  const router = useRouter();
  const schedule_id = Number(router.query.id);

  const submitHandler = async (payload: any) => {
    await updateSchedule(payload, schedule_id);
  }

  return (
    <div className="min-h-screen flex relative">
      <Panel />
      <div className="py-20 px-20 flex justify-center w-[100vw]">
        <ScheduleForm submitHandler={submitHandler} id={schedule_id}/>
      </div>
    </div>
  );
}
