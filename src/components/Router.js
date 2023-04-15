import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Info from "./Info";
import TaxSlabs from "./old/TaxSlabs";
import { BasicTable } from "../styled-components/Table";
import ModalComponent from "./old/ModalComponent";
import HRALayout from "../layouts/HRALayout";
import TaxableIncomeLayout from "../layouts/TaxableIncomeLayout";
import Homepage from "../pages/Homepage";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },

  {
    path: "/info",
    element: <Info />,
  },
  {
    path: "/taxslabs",
    element: <TaxSlabs />,
  },
  {
    path: "/table",
    element: <BasicTable />,
  },
  {
    path: "/modal",
    element: <ModalComponent />,
  },
  {
    path: "/taxes",
    element: <TaxableIncomeLayout />,
  },
  {
    path: "/hracalculator",
    element: <HRALayout />,
  },
]);

export default Router;
