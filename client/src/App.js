import * as React from "react";
import HomePage from './Pages/HomePage/HomePage'
import SearchAIPage from './Pages/SearchAIPage/SearchAIPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import SingleMentorPage from "./Pages/SingleMentorPage/SingleMentorPage";
// import {  SignedOut, SignedIn, SignInButton } from "@clerk/clerk-react";
import { RedirectToSignIn, SignedIn, SignedOut } from '@clerk/clerk-react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Video from './Pages/Video/Video'
import MenteeDashboardPage from "./Pages/MenteeDashboardPage/MenteeDashboardPage";
import OnGoingSession from "./Pages/Sessions/OnGoingSession";
import RequestedSession from "./Pages/Sessions/RequestedSession";
import PastSessions from "./Pages/Sessions/PastSessions";
import EditProfilePage from "./Pages/EditProfilePage/EditProfilePage";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<HomePage />} />
      <Route
        path="/SingleMentor/:email"
        element={
          <>
            <SignedIn>
              <SingleMentorPage />
            </SignedIn>

            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        }
      />
      {/* <Route path="/room/:roomId" element={<Video />} /> */}
      <Route
        path="/room/:roomId"
        element={
          <>
            <SignedIn>
              <Video />
            </SignedIn>

            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        }
      />
    </>
  )
);


function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />

      {/* <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="mentee-dashboard" element={<MenteeDashboardPage />} />
        <Route path="mentee-dashboard/on-going-session" element={<OnGoingSession />} />
        <Route path="mentee-dashboard/requested-session" element={<RequestedSession />} />
        <Route path="mentee-dashboard/past-session" element={<PastSessions />} />
        <Route path="mentee-dashboard/edit-profile" element={<EditProfilePage />} />
        <Route path="/SearchAi" element={<SearchAIPage />} />
        <Route path="/room/:roomId" element={<Video />} />
      </Routes> */}

    </div>
  );
}

export default App;
