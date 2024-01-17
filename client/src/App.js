import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage/HomePage'
import MenteeProfilePage from './Pages/MenteeProfilePage/MenteeProfilePage'
import UpdateProfilePage from './Pages/UpdateProfilePage/UpdateProfilePage'
import OnGoingSession from "./Pages/Sessions/OnGoingSession";
import RequestedSession from "./Pages/Sessions/RequestedSession";
import PastSessions from "./Pages/Sessions/PastSessions";
import EditProfilePage from "./Pages/EditProfilePage/EditProfilePage";
function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="mentee-profile" element={<MenteeProfilePage />} />
        <Route path="update-profile" element={<UpdateProfilePage />} />
        <Route path="mentee-profile/on-going-session" element={<OnGoingSession />} />
        <Route path="mentee-profile/requested-session" element={<RequestedSession />} />
        <Route path="mentee-profile/past-session" element={<PastSessions />} />
        <Route path="mentee-profile/edit-profile" element={<EditProfilePage />} />
      </Routes>

    </div>
  );
}

export default App;
