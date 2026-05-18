"use client";

export default function UploadCV({ setResult }: any) {
  const handleUpload = async (e: any) => {
    const file = e.target.files[0];

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/analyze", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setResult(data);
  };

  return (
    <div>
      <input type="file" onChange={handleUpload} />
    </div>
  );
}