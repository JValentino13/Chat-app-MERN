import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from '../pages/Home';
import Login from '../pages/Login';
import MainLayout from "./MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
        {index: true, element: <Login />},
        {path: "home", element: <Home />},
    ]
  }
]);