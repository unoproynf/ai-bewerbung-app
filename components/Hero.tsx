export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center mt-32 px-6">

      <h2 className="text-6xl font-bold max-w-4xl leading-tight">
        Create Professional German Applications with AI
      </h2>

      <p className="text-gray-400 mt-6 max-w-2xl text-lg">
        Upload your CV and let artificial intelligence generate
        personalized applications for Ausbildung and Duales Studium.
      </p>

      <div className="flex gap-4 mt-10">

        <button className="bg-blue-600 px-6 py-3 rounded-xl text-lg hover:bg-blue-700 transition">
          Get Started
        </button>

        <button className="border border-gray-700 px-6 py-3 rounded-xl text-lg hover:bg-gray-900 transition">
          Learn More
        </button>

      </div>

    </section>
  );
}