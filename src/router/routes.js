import Contact from "../pages/Contact";
import Landing from "../pages/Landing";
import NotFound from "../pages/NotFound";

export const routes = [
  {
    path: "/",
    element: <Landing />,
  },

  {
    path: "/contact",
    element: <Contact />,
  },

  {
    path: "*",
    element: <NotFound />,
  },
];
