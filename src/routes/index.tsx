import App from "@/App";
import LoginPage from "@/layout/Login";
import SignUpPage from "@/layout/Register";
import About from "@/pages/About";
import Rootlayout from "@/Rootlayout/Rootlayout";
import { createBrowserRouter } from "react-router";


const router = createBrowserRouter([
  {
    path: "/",
    Component: Rootlayout,
    children: [
      {
        index: true,
        Component: App,
      },
      {
        path: "about",
        Component: About,
      },
    ],
  },
  {
    path:"/signin",
    Component:LoginPage
  },
  {
    path:"/signup",
    Component:SignUpPage
  }
]);

export default router;
