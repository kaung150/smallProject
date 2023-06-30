import GuessLayout from "./components/layouts/GuessLayout";
import DefaultLayout from "./components/layouts/DefaultLayout";
import Login from "./pages/auth/Login";
import NotFound from "./pages/notfound/NotFound";
import Profile from "./pages/dashboard/Profile";
import Register from "./pages/auth/Register";
import Tag from "./pages/dashboard/Tag";
import Dashboard from "./pages/dashboard/Dashboard";
import AllProfiles from "./pages/dashboard/AllProfiles";
import Cards from "./pages/dashboard/Cards";
import Users from "./pages/dashboard/Users";
import CardDetails from "./pages/CardDetail";

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
        path: "/cards",
        element: <Cards />,
      },
      {
        path: "/cards/:id",
        element: <CardDetails />
      },
      {
        path: "/users",
        element: <Users />,
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
