import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Info from "./Info";
import TaxSlabs from "./old/TaxSlabs";
import { BasicTable } from "../styled-components/Table";
import ModalComponent from "./old/ModalComponent";
import HRALayout from "../layouts/HRALayout";
import TaxableIncomeLayout from "../layouts/TaxableIncomeLayout";
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
