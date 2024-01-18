import * as React from "react";

import HomePage from "./Pages/HomePage/HomePage";
import SingleMentorPage from "./Pages/SingleMentorPage/SingleMentorPage";
import SearchAIPage from "./Pages/SearchAIPage/SearchAIPage"
// import {  SignedOut, SignedIn, SignInButton } from "@clerk/clerk-react";
import { RedirectToSignIn, SignedIn, SignedOut } from '@clerk/clerk-react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Video from './Pages/Video/Video'
import SideBar from "./Components/SideBar/SideBar";
import MentorProfile from "./Pages/MentorProfile/MentorProfile";
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
      <Route path="/SearchAI" element={<SearchAIPage />}/>
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
      <Route
        path="/dashboard"
        element={
          <>
            <SignedIn>
              <SideBar>
                {/* <SingleMentorPage/> */}
              </SideBar>
              
            </SignedIn>

            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        }
      />
      <Route
        path="/mentorProfile"
        element={
          <>
            <SignedIn>
            <SideBar>
            <MentorProfile/>
              </SideBar>
              
              
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
    </div>
  );
}

export default App;
