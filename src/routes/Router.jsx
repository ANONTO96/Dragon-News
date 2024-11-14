import { createBrowserRouter } from "react-router-dom";
import Home from "../layouts/Home";

const Router = createBrowserRouter([
    {
        path:'/',
        element:<Home></Home>,
    },
    {
        path: '/news',
        element:'',
    },
    {
        path:'auth',
        element:'',
    },
    {
        path:'*',
        element:'',
    }
])

export default Router;