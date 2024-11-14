import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../layouts/Home";
import CategoryNews from "../pages/CategoryNews";

const Router = createBrowserRouter([
    {
        path:'/',
        element:<Home></Home>,
        children:[
            {
                path:'',
                element:<Navigate to={'/category/01'}></Navigate>
            },
            {
                path:'/category/:id',
                element:<CategoryNews></CategoryNews>,
                loader:({ params }) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`),
            },
        ]
    },
    {
        path: '/news',
        element:<h1>news layout</h1>,
    },
    {
        path:'/carrier',
        element:<h1>carrier</h1>,
    },
    {
        path:'/About',
        element:<h1>about</h1>,
    },
    {
        path:'auth',
        element:'',
    },
    {
        path:'*',
        element:<h1>this page is not available</h1>,
    }
])

export default Router;