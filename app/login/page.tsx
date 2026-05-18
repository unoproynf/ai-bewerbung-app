export default function LoginPage() {

  return (

    <main className="min-h-screen flex items-center justify-center bg-black text-white p-6">

      <div className="glass-card w-full max-w-md p-10">

        <h1 className="text-4xl font-bold mb-3 text-center">
          Welcome Back
        </h1>

        <p className="text-gray-400 text-center mb-8">
          Login to your AI Bewerbung account
        </p>

        <form className="flex flex-col gap-6">

          <input
            type="email"
            placeholder="Email"
            className="bg-gray-900 border border-gray-800 rounded-xl p-4 outline-none focus:border-blue-500 transition"
          />

          <input
            type="password"
            placeholder="Password"
            className="bg-gray-900 border border-gray-800 rounded-xl p-4 outline-none focus:border-blue-500 transition"
          />

          <button
            className="bg-blue-600 hover:bg-blue-700 transition rounded-xl p-4 font-bold"
          >
            Login
          </button>

        </form>

        <p className="text-gray-500 text-center mt-8">
          AI Powered German Applications 🚀
        </p>

      </div>

    </main>

  );
}