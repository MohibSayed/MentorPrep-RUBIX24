import * as React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
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
    </>
  )
);


function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />

      {/* <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/room/:roomId" element={<Video />} />
      </Routes> */}

    </div>
  );
}

export default App;
