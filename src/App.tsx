import "./App.css";
import { RouterProvider } from "react-router";
import router from "./router";
import React from "react";

const App:React.FC = () => {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
