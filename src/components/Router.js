import { createBrowserRouter } from "react-router-dom";

import App from '../App';
import Info from './Info';
import TaxSlabs from "./TaxSlabs";
import { BasicTable } from "../styled-components/Table";
import ModalComponent from "./ModalComponent";
import Layout from './HRALayout';
import Homepage from "../pages/Homepage";
import HRACalculatorForm from "../forms/HRACalulatorForm";

const Router = createBrowserRouter([

    {
        path: "/",
        element: (
            <Homepage />
        )
    },

    {
        path: "/info",
        element: <Info />
    },
    {
        path: "/taxslabs",
        element: <TaxSlabs />
    },
    {
      path: "/table",
      element: <BasicTable />
    },
    {
        path: "/modal",
        element: <ModalComponent />
    },
    {
        path:"/cal",
        element: <HRACalculatorForm />
    },
    {
        path:"/taxes",
        element: <App />
    },
    {
        path:"/layout",
        element: <Layout />
    }
]);

export default Router;
