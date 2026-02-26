import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from '../pages/Home';
import Login from '../pages/Login';
import MainLayout from "./MainLayout";
import ChatApp from "../pages/chats/chatApp";

export const router = createBrowserRouter([
  // Login and Register Page
  {
    path: "/login",
    children: [
        {index: true, element: <Login />},
    ],
  },

  // all Page
  {
    path: "/pages",
    element: <MainLayout />,
    children: [
      {index: true, element: <Home />},,
      {path: "chat", element: <ChatApp />},
    ]
  }
]);