import UploadBox from "@/components/UploadBox";

export default function Home() {

  return (

    <main className="min-h-screen flex flex-col items-center justify-center p-10">

      <h1 className="text-5xl font-bold text-center">
        Create Professional German Applications with AI
      </h1>

      <p className="text-gray-400 mt-6 text-center max-w-2xl">
        Upload your CV and generate smart applications for
        Ausbildung and Duales Studium.
      </p>

      <UploadBox />

    </main>
  );
}