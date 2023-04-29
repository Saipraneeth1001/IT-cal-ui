import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import HRALayout from "../layouts/HRALayout";
import Homepage from "../pages/Homepage";
import CalculateTaxPage from "../pages/CalculateTaxPage";
import Infopage from "../pages/Infopage";
import ScrollToSection from '../layouts/ScrollToSection';
import SimpleExamplePage from "../pages/SimpleExamplePage";
import ComplexExamplePage from "../pages/ComplexExamplePage";
import Investments from "../pages/Investments";
import SimpleExampleOne from "../components/examples/SimpleExampleOne";


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
  {
    path: "/simple-example",
    element: <SimpleExamplePage />,
  },
  {
    path: "/complex-example",
    element: <ComplexExamplePage />,
  },
  {
    path: "/investments",
    element: <Investments />,
  },
  {
    path: "/simple-ex-15",
    element: <SimpleExampleOne />,
  }

]);

export default Router;
