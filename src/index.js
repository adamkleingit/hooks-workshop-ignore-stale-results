import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";

function App() {
  const [name, setName] = useState("");
  const [results, setResults] = useState("");

  const savedName = useRef();
  useEffect(function updateSavedName() {
    savedName.current = name;
  });

  useEffect(function fetchResults() {
    if (name) {
      setTimeout(() => {
        // mock server call
        if (name === savedName.current) {
          setResults(`Results for ${name}`);
        }
      }, 2000);
    } else {
      setResults([]);
    }
  }, [name]);

  return (
    <div className="App">
      <input value={name} onChange={e => setName(e.target.value)} />
      <div>{results}</div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
