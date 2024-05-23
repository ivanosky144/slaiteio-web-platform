import { useState } from 'react';
import { BsPersonFill } from "react-icons/bs";
import { AiOutlineMail } from 'react-icons/ai';
import { FaUnlockKeyhole } from 'react-icons/fa6';
import 'tailwindcss/tailwind.css';
import { registerUser } from '@/services';

export default function Register() {

  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const payload = {
      username,
      email,
      password
    }

    await registerUser(payload);
  }

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-gradient-to-br shadow-xl rounded-lg from-[#ade25d] to-[#00ffff] h-[75vh] w-[25vw]"></div>
      <div className="bg-white p-8 rounded-lg shadow-xl flex flex-col items-center h-[75vh] w-[25vw] justify-center">
        <h1 className="text-3xl font-bold mb-10 text-slate-500">Sign Up</h1>
        <form className="space-y-4 w-full flex flex-col gap-5" onSubmit={handleSubmit}>
          <div className='flex flex-col gap-4'>
            <div className="flex items-center gap-2 p-3 bg-green-50 text-xl">
              <BsPersonFill />
              <input
                type="username"
                id="username"
                className="w-full rounded-md p-3 bg-green-50 font-semibold outline-none text-xl"
                placeholder="Type your username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
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
            className="w-full bg-blue-500 text-white rounded-2xl py-4 mt-10 bg-gradient-to-br from-[#ade25d] to-[#00FFFF] font-bold hover:scale-105"
          >
            REGISTER
          </button>
        </form>
      </div>
    </div>
  )
}
