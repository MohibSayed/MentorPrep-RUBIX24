import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage/HomePage'
import SingleMentorPage from "./Pages/SingleMentorPage/SingleMentorPage";
function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/SingleMentor" element={<SingleMentorPage />} />
      </Routes>

    </div>
  );
}

export default App;
