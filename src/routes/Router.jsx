import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../layouts/Home";
import CategoryNews from "../pages/CategoryNews";
import AboutUs from "../layouts/AboutUs";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";

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
        path:'/carrier',
        element:<h1>carrier</h1>,
    },
    {
        path:'/About',
        element:<AboutUs></AboutUs>,
    },
    {
        path:'/auth',
        element:<AuthLayout></AuthLayout>,
        children:[
            {
                path:'/auth/login',
                element:<Login></Login>
            },
            {
                path:'/auth/register',
                element:<Register></Register>
            }
        ]
    },
    {
        path: '/news',
        element:<h1>news layout</h1>,
    },
    {
        path:'*',
        element:<h1>this page is not available</h1>,
    }
])

export default Router;