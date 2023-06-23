import GuessLayout from "./components/GuessLayout";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";

const { createBrowserRouter } = require("react-router-dom");
const { default: DefaultLayout } = require("./components/DefaultLayout");
const { default: Dashboard } = require("./pages/Dashboard");
const { default: CardView } = require("./pages/CardView");

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
