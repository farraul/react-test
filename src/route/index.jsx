import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ProfilePage from "../pages/ProfilePage";
import RegisterPage from "../pages/RegisterPage";


export const route = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [{
            errorElement: <ErrorPage />,
            children: [{
                index: true,
                element: <HomePage />
            }, {
                path: "/login",
                element: <LoginPage />
            },
            {
                path: "/register",
                element: <RegisterPage />
            },
            {
                path: "/profile",
                element: <ProfilePage />
            }
            
            
        ]
        }]
    }
])

