"use client";

import { useState, useRef } from "react";
import jsPDF from "jspdf";

export default function GeneratorPage() {

  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [company, setCompany] = useState("");
  const [language, setLanguage] = useState("de");
  const [result, setResult] = useState("");

  const resultRef = useRef<HTMLDivElement>(null);

  function generateBewerbung() {

    if (language === "de") {

      setResult(`
Sehr geehrte Damen und Herren,

mein Name ist ${name}.

Hiermit bewerbe ich mich bei ${company}
für die Position ${job}.

Ich interessiere mich sehr für Informatik,
Webentwicklung und moderne Technologien.

Mit freundlichen Grüßen
${name}
      `);

    } else {

      setResult(`
Dear Sir or Madam,

My name is ${name}.

I apply for the position of ${job}
at ${company}.

I am highly motivated in IT and web development.

Kind regards,
${name}
      `);

    }

  }

  function downloadPDF() {

    const doc = new jsPDF();

    const text = result;

    const lines = doc.splitTextToSize(text, 180);

    doc.setFont("helvetica");
    doc.setFontSize(12);

    doc.text(lines, 10, 20);

    doc.save("bewerbung.pdf");
  }

  return (

    <main className="min-h-screen bg-black text-white p-10">

      <h1 className="text-5xl font-bold mb-10">
        AI Bewerbung Generator
      </h1>

      <div className="glass-card p-8 max-w-2xl flex flex-col gap-4">

        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-3 bg-gray-900 border border-gray-800 rounded-xl"
        />

        <input
          placeholder="Job"
          value={job}
          onChange={(e) => setJob(e.target.value)}
          className="p-3 bg-gray-900 border border-gray-800 rounded-xl"
        />

        <input
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="p-3 bg-gray-900 border border-gray-800 rounded-xl"
        />

        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="p-3 bg-gray-900 border border-gray-800 rounded-xl"
        >
          <option value="de">German</option>
          <option value="en">English</option>
        </select>

        <button
          onClick={generateBewerbung}
          className="bg-blue-600 p-3 rounded-xl font-bold"
        >
          Generate
        </button>

      </div>

      {result && (

        <div className="mt-10 glass-card p-8 max-w-3xl whitespace-pre-line">

          <h2 className="text-2xl font-bold mb-4">
            Generated Letter
          </h2>

          <div ref={resultRef}>
            {result}
          </div>

          <button
            onClick={downloadPDF}
            className="mt-6 bg-green-600 px-6 py-3 rounded-xl font-bold"
          >
            Download PDF
          </button>

        </div>

      )}

    </main>

  );
}