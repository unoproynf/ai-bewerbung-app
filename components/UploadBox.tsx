"use client";

import { useState } from "react";

export default function UploadBox() {

  const [fileName, setFileName] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  function handleFileChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {

    const file = event.target.files?.[0];

    if (file) {
      setFileName(file.name);
    }
  }

  async function analyzeCV() {

    setLoading(true);

    setTimeout(() => {

      setResult(`
CV Score: 82%

Strengths:
- Good motivation
- Basic programming skills
- Nice project portfolio

Suggestions:
- Learn React deeper
- Improve backend skills
- Add more GitHub projects
      `);

      setLoading(false);

    }, 2000);
  }

  return (

    <div className="mt-20 flex flex-col items-center">

      <label className="bg-blue-600 px-6 py-3 rounded-xl cursor-pointer hover:bg-blue-700 transition">

        Upload CV

        <input
          type="file"
          className="hidden"
          onChange={handleFileChange}
        />

      </label>

      {fileName && (
        <p className="mt-4 text-gray-400">
          Uploaded File: {fileName}
        </p>
      )}

      {fileName && (

        <button
          onClick={analyzeCV}
          className="mt-6 bg-green-600 px-6 py-3 rounded-xl hover:bg-green-700 transition"
        >

          Analyze CV

        </button>

      )}

      {loading && (
        <p className="mt-6 text-yellow-400">
          AI is analyzing your CV...
        </p>
      )}

      {result && (
        <div className="mt-6 bg-gray-900 border border-gray-800 p-6 rounded-xl max-w-xl">

          <h3 className="text-xl font-bold mb-2">
            AI Result
          </h3>

          <p className="text-gray-300 whitespace-pre-line">
            {result}
          </p>

        </div>
      )}

    </div>
  );
}