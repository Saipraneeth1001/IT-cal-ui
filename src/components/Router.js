import { createBrowserRouter } from "react-router-dom";

import App from '../App';
import Info from './Info';
import TaxSlabs from "./TaxSlabs";

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
    }
]);

export default Router;
