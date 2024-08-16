import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './App.jsx'
import AboutUsPage from './pages/AboutUs.jsx';
import DonatePage from './pages/Donate.jsx';
import TakeActionPage from './pages/TakeAction.jsx';
import ErrorPage from './pages/Error.jsx';
import HomePage from './pages/Home.jsx';
import './index.css'
import FurnitureMapPage from './pages/FurnitureMap.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "furnituremap",
        element: <FurnitureMapPage />,
      },
      {
        path: "donate",
        element: <DonatePage />,
      },
      {
        path: "takeaction",
        element: <TakeActionPage />,
      },
      {
        path: "aboutus",
        element: <AboutUsPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
