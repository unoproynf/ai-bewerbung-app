export default function Button() {
  const handleClick = async () => {
    const res = await fetch("/api/analyze");
    const data = await res.json();
    alert(data.message);
  };

  return <button onClick={handleClick}>Run API</button>;
}