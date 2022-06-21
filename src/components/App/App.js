import "./App.css";
import CategoryList from "../CategoryList";
import Quote from "../Quote";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mindset from "../Mindset";
import Resources from "../Resources";
import Selfcare from "../Selfcare";
import { Fragment } from 'react';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><CategoryList />
          <Quote /> </>} />
          <Route path="/mindset" element={<Mindset />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/selfcare" element={<Selfcare />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
