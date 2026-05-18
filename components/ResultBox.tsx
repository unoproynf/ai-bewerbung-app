export default function ResultBox({ result }: any) {
  return (
    <div style={{ marginTop: 20, padding: 10, border: "1px solid #ccc" }}>
      <h3>AI Analysis</h3>

      <p>Level: {result.analysis.level}</p>
      <p>Score: {result.analysis.score}</p>

      <p>Skills:</p>
      <ul>
        {result.analysis.skills.map((s: string, i: number) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    </div>
  );
}