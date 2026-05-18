import Link from "next/link";

export default function Sidebar() {

  return (

    <aside className="w-64 min-h-screen bg-gray-950 border-r border-gray-800 p-6">

      <h2 className="text-2xl font-bold text-blue-500 mb-10">
        AI Bewerbung
      </h2>

      <nav className="flex flex-col gap-6">

        <Link
          href="/dashboard"
          className="hover:text-blue-400 transition"
        >
          Dashboard
        </Link>

        <Link
          href="/"
          className="hover:text-blue-400 transition"
        >
          CV Analyzer
        </Link>

        <Link
          href="/applications"
          className="hover:text-blue-400 transition"
        >
          Applications
        </Link>

        <Link
          href="/settings"
          className="hover:text-blue-400 transition"
        >
          Settings
        </Link>
        <Link
  href="/generator"
  className="hover:text-blue-400 transition"
>
  Bewerbung Generator
</Link>

      </nav>

    </aside>

  );
}