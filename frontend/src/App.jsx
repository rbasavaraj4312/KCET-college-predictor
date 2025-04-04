import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import Dashboard from "./Components/Dashboard/Dashboard";
import Result from "./Components/Result/Result";
import Graph from "./Components/Graph/Graph";

function App() {
  const [last, setlast] = useState(() => {
    try {
      const stored = localStorage.getItem("last");
      return stored ? JSON.parse(stored) : [];
    } catch (err) {
      console.error("Failed to parse 'last' from localStorage:", err);
      return [];
    }
  });

  const [backend, setBackend] = useState("http://localhost:4000");

  useEffect(() => {
    localStorage.setItem("last", JSON.stringify(last));
  }, [last]);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard setlast={setlast} />} />
          <Route
            path="/result"
            element={<Result last={last} backend={backend} />}
          />
          <Route
            path="/graph"
            element={<Graph last={last} backend={backend} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
