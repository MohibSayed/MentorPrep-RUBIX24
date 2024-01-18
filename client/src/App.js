import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage/HomePage'
import SearchAIPage from "./Pages/SearchAIPage/SearchAIPage";
import FindMentorPage from "./Pages/FindMentorPage/FindMentorPage";
import CommunityHome from "./Pages/CommunityHome/CommunityHome";
function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/SearchAI" element={<SearchAIPage />} />
        <Route path="/findMyMentor" element={<FindMentorPage />} />
        <Route path="/feed" element={<CommunityHome />}/>
      </Routes>

    </div>
  );
}

export default App;
