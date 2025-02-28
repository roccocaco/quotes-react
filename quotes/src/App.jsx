import { useState } from "react";
import Quote from "./components/Quote";
import quotes from "./data";

function App() {
  const [indice, setIndice] = useState(0);

  const proximaCitacao = () => {
    setIndice((indiceAtual) => (indiceAtual + 1) % quotes.length);
  };

  return (
    <div className="container mt-5">
      <Quote texto={quotes[indice].texto} autor={quotes[indice].autor} />
      <button className="btn btn-success mt-2" onClick={proximaCitacao}>Próxima citação</button>
    </div>
  );
}

export default App
