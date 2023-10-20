import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/home";
import Fallback from "../pages/fallback";
import Repository from "../pages/repository";
import Repositories from "../pages/repositories";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/repositories",
        element: <Repositories />,
      },
      {
        // make this route dynamic based off the selected repo name
        path: "/repository",
        element: <Repository />,
      },
    ],
  },
  {
    path: "*",
    element: <Fallback />,
  },
]);

export default router;
