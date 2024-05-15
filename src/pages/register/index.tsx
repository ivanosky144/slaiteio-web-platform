import 'tailwindcss/tailwind.css';

export default function Register() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-gradient-to-br shadow-xl rounded-lg from-[#ade25d] to-[#00ffff] h-[75vh] w-[25vw]"></div>
      <div className="bg-white p-8 rounded-lg shadow-xl flex flex-col items-center h-[75vh] w-[25vw] justify-center">
        <h1 className="text-2xl font-bold mb-4 text-slate-500">Sign Up</h1>
        <form className="space-y-4 w-full">
          <div>
            <label htmlFor="username" className="block font-medium text-slate-500">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full rounded-md p-2 bg-green-100 font-semibold outline-none"
              placeholder="Type your username"
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-medium text-slate-500">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full rounded-md p-2 bg-green-100 font-semibold outline-none"
              placeholder="Type your email"
            />
          </div>
          <div>
            <label htmlFor="password" className="block font-medium text-slate-500">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full rounded-md p-2 bg-green-100 font-semibold outline-none"
              placeholder="Type your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white rounded-2xl py-2 mt-10 bg-gradient-to-br from-[#ade25d] to-[#00FFFF] font-bold"
          >
            REGISTER
          </button>
        </form>
      </div>
    </div>
  )
}
