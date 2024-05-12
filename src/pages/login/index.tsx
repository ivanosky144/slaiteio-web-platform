import 'tailwindcss/tailwind.css';

export default function Login() {
  return (
    <div className="bg-gradient-to-br from-[#ade25d] to-[#00FFFF] min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center h-[75vh] w-[25vw]">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <form className="space-y-4 w-full">
          <div>
            <label htmlFor="email" className="block font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border-gray-300 rounded-md p-2"
              placeholder="Type your email"
            />
          </div>
          <div>
            <label htmlFor="password" className="block font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full border-gray-300 rounded-md p-2"
              placeholder="Type your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white rounded-2xl py-2 mt-10 bg-gradient-to-br from-[#ade25d] to-[#00FFFF] font-bold"
          >
            LOGIN
          </button>
        </form>
      </div>
    </div>
  )
}
