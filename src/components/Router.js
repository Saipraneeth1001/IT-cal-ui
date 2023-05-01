import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import HRALayout from "../layouts/HRALayout";
import Homepage from "../pages/Homepage";
import CalculateTaxPage from "../pages/old/CalculateTaxPage";
import Infopage from "../pages/Infopage";
import ScrollToSection from "../layouts/ScrollToSection";
import ComplexExamplePage from "../pages/ComplexExamplePage";
import Investments from "../pages/Investments";
import SimpleExampleOne from "../components/examples/SimpleExampleOne";
import TaxForm from "../pages/IncomeTaxCalculatorPage";
import SimpleExample from "../data/SimpleExample";

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
    path: "/complex-example",
    element: <ComplexExamplePage />,
  },
  {
    path: "/investments",
    element: <Investments />,
  },
  {
    path: "/calculate-taxes",
    element: <TaxForm />,
  },
  {
    path: "/simple-ex-15",
    element: <SimpleExampleOne />,
  },
  {
    path: "/simple-example",
    element: <SimpleExample />,
  },
]);

export default Router;
