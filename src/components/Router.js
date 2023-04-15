import { createBrowserRouter } from "react-router-dom";

import App from '../App';
import Info from './Info';
import TaxSlabs from "./TaxSlabs";
import { BasicTable } from "../styled-components/Table";
import ModalComponent from "./ModalComponent";
import Layout from './Layout';
import Homepage from "../pages/Homepage";

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
    }
]);

export default Router;
