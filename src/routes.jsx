import GuessLayout from "./components/layouts/GuessLayout";
import DefaultLayout from "./components/layouts/DefaultLayout";
import Login from "./pages/auth/Login";
import NotFound from "./pages/notfound/NotFound";
import Profile from "./pages/dashboard/Profile";
import Register from "./pages/auth/Register";
import Tag from "./pages/dashboard/Tag";
import Dashboard from "./pages/dashboard/Dashboard";
import CardView from "./pages/dashboard/CardView";
import AllProfiles from "./pages/dashboard/AllProfiles";
import Notifications from "./pages/dashboard/Notifications";

const { createBrowserRouter } = require("react-router-dom");

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/cardview",
        element: <CardView />,
      },
      {
        path: "/tag",
        element: <Tag />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/allprofiles",
        element: <AllProfiles />,
      },
      {
        path: "/notifications",
        element: <Notifications />,
      },
    ],
  },

  {
    path: "/",
    element: <GuessLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);
