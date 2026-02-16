import { useState } from "react";

function App() {
  const [result, setResult] = useState("");

  const generate = async () => {
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: "Write about wildlife conservation" }),
    });

    const data = await response.json();
    setResult(data.candidates?.[0]?.content?.parts?.[0]?.text || "No response");
  };

  return (
    <div style={{ padding: "40px" }}>
     <h1>Wildlife SEO Strategist Pro 🐆 UPDATED</h1>
      <button onClick={generate} style={{ marginTop: "20px" }}>
        Generate
      </button>
      <p style={{ marginTop: "20px", whiteSpace: "pre-wrap" }}>{result}</p>
    </div>
  );
}

export default App;
