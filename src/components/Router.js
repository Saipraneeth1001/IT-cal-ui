import { createBrowserRouter } from "react-router-dom";

import App from '../App';
import Info from './Info';
import TaxSlabs from "./TaxSlabs";
import { BasicTable } from "../styled-components/Table";

const Router = createBrowserRouter([

    {
        path: "/",
        element: (
            <App />
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
    }
]);

export default Router;
