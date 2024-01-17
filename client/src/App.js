import * as React from "react";
import HomePage from './Pages/HomePage/HomePage'
import SearchAIPage from './Pages/SearchAIPage/SearchAIPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/SearchAi" element={<SearchAIPage />} />
      </Routes>

    </div>
  );
}

export default App;
