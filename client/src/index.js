import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {BrowserRouter} from "react-router-dom"
import { ClerkProvider } from "@clerk/clerk-react";
// const {VITE_CLERK_PUBLISHABLE_KEY} = import.meta.env;
// const PUBLISHABLE_KEY = "pk_test_c3VwcmVtZS1iZWRidWctMi5jbGVyay5hY2NvdW50cy5kZXYk";
// console.log(PUBLISHABLE_KEY);
// Import your publishable key
const PUBLISHABLE_KEY = "pk_test_c3VwcmVtZS1iZWRidWctMi5jbGVyay5hY2NvdW50cy5kZXYk";

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        {/* <BrowserRouter> */}
        <App />

        {/* </BrowserRouter> */}
        </ClerkProvider>
  </React.StrictMode>
);