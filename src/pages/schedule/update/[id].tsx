import 'tailwindcss/tailwind.css';
import 'tailwind-scrollbar';

import MenuPanel from '@/components/MenuPanel';
import ScheduleForm from '@/components/ScheduleForm';
import { updateSchedule } from '@/services';
import { useRouter } from 'next/router';

export default function ScheduleUpdate() {
  const router = useRouter();
  const schedule_id = Number(router.query.id);

  const submitHandler = async (payload: any) => {
    await updateSchedule(payload, schedule_id);
  }

  return (
    <div className="min-h-screen flex relative">
      <MenuPanel />
      <div className="py-20 px-20 flex justify-center w-[100vw]">
        <ScheduleForm submitHandler={submitHandler} id={schedule_id}/>
      </div>
    </div>
  );
}
