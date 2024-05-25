import 'tailwindcss/tailwind.css';
import { AiOutlineMail } from "react-icons/ai";
import { FaUnlockKeyhole } from "react-icons/fa6";
import { useState } from 'react';
import useAuthStore from '@/store/authStore';
import { useRouter } from 'next/router';
import Spinner from '@/components/Spinner';

export default function Login() {

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const login = useAuthStore((state) => state.login);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const payload = {
      email,
      password
    }
    await login(payload);
    router.push('/home');
  }

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-gradient-to-br shadow-xl rounded-lg from-[#ade25d] to-[#00ffff] h-[75vh] w-[25vw]"></div>
      <div className="bg-white p-8 rounded-lg shadow-xl flex flex-col items-center h-[75vh] w-[25vw] justify-center">
        <h1 className="font-bold mb-10 text-slate-500 text-3xl">Sign In</h1>
        <form className="space-y-4 w-full flex flex-col gap-5" onSubmit={handleSubmit}>
          <div className='flex flex-col gap-4'>
            <div className="flex items-center gap-2 p-3 bg-green-50 text-xl">
              <AiOutlineMail />
              <input
                type="email"
                id="email"
                className="w-full rounded-md p-3 bg-green-50 font-semibold outline-none text-xl"
                placeholder="Type your email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2 p-3 bg-green-50 text-xl">
              <FaUnlockKeyhole />
              <input
                type="password"
                id="password"
                className="w-full rounded-md p-3 bg-green-50 font-semibold outline-none text-xl"
                placeholder="Type your password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white rounded-2xl py-4 mt-10 bg-gradient-to-br from-[#ade25d] to-[#00FFFF] font-bold hover:scale-105 flex justify-center"
          >
            {isLoading ? <Spinner /> : 'LOGIN'}
          </button>
          <div className="flex justify-between">
            <span className='text-green-400 font-semibold cursor-pointer'>Forgot your password ?</span>
            <span className='text-green-400 font-semibold cursor-pointer'>Don't have an account ?</span>
          </div>
        </form>
      </div>
    </div>
  )
}
