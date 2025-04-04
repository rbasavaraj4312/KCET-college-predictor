import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from "./Components/Dashboard/Dashboard";
import { useState } from "react";
import Result from "./Components/Result/Result";
import Graph from "./Components/Graph/Graph";

function App() {
  const [last, setlast] = useState([]);
  const [language, setLanguage] = useState("en");
  const [backend, setBackend] = useState("http://localhost:4000");
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Dashboard
                setlast={setlast}
                setLanguage={setLanguage}
                language={language}
              />
            }
          />
          <Route
            path="/result"
            element={
              <Result
                last={last}
                backend={backend}
                setLanguage={setLanguage}
                language={language}
              />
            }
          />
          {
            <Route
              path="/graph"
              element={<Graph last={last} backend={backend} />}
            />
          }
        </Routes>
      </Router>
    </div>
  );
}

export default App;
