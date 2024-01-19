import * as React from "react";

import HomePage from "./Pages/HomePage/HomePage";
import SingleMentorPage from "./Pages/SingleMentorPage/SingleMentorPage";
import { RedirectToSignIn, SignedIn, SignedOut } from '@clerk/clerk-react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Video from './Pages/Video/Video'
import SideBar from "./Components/SideBar/SideBar";

import SideBarMentee from "./Components/SideBar/SideBarMentee";
import MentorProfile from "./Pages/MentorProfile/MentorProfile";
import MenteeProfile from "./Pages/MenteeProfile/MenteeProfile";
import FindMentorPage from "./Pages/FindMentorPage/FindMentorPage";
import EditMenteeProfile from "./Pages/EditMenteeProfile/EditMenteeProfile";
import Resume from "./Pages/Resume/Resume";
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
      {/* <Route
        path="/dashboard/:email"
        element={
          <>
            <SignedIn>
              <SideBar>
                <MentorProfile />
              </SideBar>

            </SignedIn>

            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        }
      /> */}
      <Route
        path="/menteeProfile/:email"
        element={
          <>
            <SignedIn>
              {/* For Mentee -> SideBarMentee  */}
              <SideBarMentee>
                <MenteeProfile />
              </SideBarMentee>

            </SignedIn>

            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        }
      />
      <Route
        path="/menteeProfile/edit/:email"
        element={
          <>
            <SignedIn>
              <SideBarMentee>
                <EditMenteeProfile />
              </SideBarMentee>


            </SignedIn>

            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        }
      />
      <Route
        path="/mentorProfile/:email"
        element={
          <>
            <SignedIn>
              <SideBar>
                <MentorProfile />
              </SideBar>


            </SignedIn>

            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        }
      />
      <Route
        path="/mentorProfile/edit/:email"
        element={
          <>
            <SignedIn>
              <SideBar>
                <MentorProfile />
              </SideBar>


            </SignedIn>

            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        }
      />
      <Route
        path="/mentorProfile/edit/:email"
        element={
          <>
            <SignedIn>
              <SideBar>
                <MentorProfile />
              </SideBar>


            </SignedIn>

            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        }
      />
      <Route
        path="/matchMentor"
        element={
          <>
            <SignedIn>
              <FindMentorPage />


            </SignedIn>

            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        }
      />
      <Route
        path="/Resume"
        element={
          <>
            <SignedIn>
              <Resume />
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
