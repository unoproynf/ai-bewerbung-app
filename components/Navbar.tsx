import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-6 border-b border-gray-800">

      <Link
        href="/"
        className="text-2xl font-bold text-blue-500"
      >
        AI Bewerbung
      </Link>

      <div className="flex gap-6 items-center">

        <Link
          href="/"
          className="hover:text-blue-400 transition"
        >
          Home
        </Link>

        <Link
          href="/dashboard"
          className="hover:text-blue-400 transition"
        >
          Dashboard
        </Link>

        <Link
  href="/login"
  className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
>
  Login
</Link>

      </div>

    </nav>
  );
}