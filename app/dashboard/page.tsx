import Sidebar from "@/components/Sidebar";

export default function DashboardPage() {

  return (

    <main className="flex bg-black text-white min-h-screen">

      <Sidebar />

      <section className="flex-1 p-10">

        <h1 className="text-5xl font-bold mb-10">
          AI Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="glass-card p-6">

            <h2 className="text-2xl font-bold">
              CV Analyses
            </h2>

            <p className="text-5xl font-bold mt-6">
              12
            </p>

            <div className="w-full bg-gray-800 rounded-full h-3 mt-6">

              <div className="bg-blue-500 h-3 rounded-full w-[75%]"></div>

            </div>

            <p className="text-gray-400 mt-3">
              +75% this month
            </p>

          </div>

          <div className="glass-card p-6">

            <h2 className="text-2xl font-bold">
              Match Score
            </h2>

            <p className="text-5xl font-bold mt-6">
              82%
            </p>

            <div className="w-full bg-gray-800 rounded-full h-3 mt-6">

              <div className="bg-green-500 h-3 rounded-full w-[82%]"></div>

            </div>

            <p className="text-gray-400 mt-3">
              AI optimization active
            </p>

          </div>

          <div className="glass-card p-6">

            <h2 className="text-2xl font-bold">
              Applications
            </h2>

            <p className="text-5xl font-bold mt-6">
              5
            </p>

            <div className="w-full bg-gray-800 rounded-full h-3 mt-6">

              <div className="bg-purple-500 h-3 rounded-full w-[60%]"></div>

            </div>

            <p className="text-gray-400 mt-3">
              3 accepted by companies
            </p>

          </div>

        </div>

        <div className="glass-card p-8 mt-10">

          <h2 className="text-3xl font-bold mb-6">
            AI Insights
          </h2>

          <div className="space-y-4 text-gray-300">

            <p>
              ✅ Your CV matches German Ausbildung standards.
            </p>

            <p>
              ⚡ Your GitHub projects improve your profile significantly.
            </p>

            <p>
              🚀 Recommendation:
              Learn React backend + databases.
            </p>

            <p>
              🎯 Best suited fields:
              Wirtschaftsinformatik,
              Systemintegration,
              Data Science.
            </p>

          </div>

        </div>

      </section>

    </main>

  );
}