import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import HRALayout from "../layouts/HRALayout";
import Homepage from "../pages/Homepage";
import CalculateTaxPage from "../pages/CalculateTaxPage";
import Infopage from "../pages/Infopage";
import ScrollToSection from '../layouts/ScrollToSection';

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },

  {
    path: "/info",
    element: <Infopage />,
  },
  {
    path: "/taxes",
    element: <CalculateTaxPage />,
  },
  {
    path: "/hracalculator",
    element: <HRALayout />,
  },
  {
    path: "/section",
    element: <ScrollToSection />,
  },
]);

export default Router;
