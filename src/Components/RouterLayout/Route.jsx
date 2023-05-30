import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../MainLayout";
import HomePage from "../PageLayout/HomePage/HomePage";
import OurMenuPage from "../PageLayout/OurMenuPage/OurMenuPage";
import OurShop from "../PageLayout/OurShopPage/OurShop";
import Contactus from "../PageLayout/ContactPage/Contactus";
import LoginPage from "../PageLayout/LoginPage/LoginPage";
import Registration from "../PageLayout/RegistrationPage/Registration";
import DashboardPage from "../PageLayout/DashboardPage/DashboardPage";
import MyCart from "../PageLayout/DashboardPage/Components/MyCart";
import PrivateRoute from "../AuthContextLayout/PrivateRoute";
import Alluser from "../PageLayout/DashboardPage/AllUser/Alluser";

const route = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children:[
            {
                path:"/",
                element: <HomePage/>
            },
            {
                path:"/ourmenu",
                element: <OurMenuPage/>
            },
            {
                path:'/ourshop/:category',
                element: <OurShop/>
            },
            {
                path:'/contact',
                element: <Contactus/>
            }
        ]
    },
    {
        path: "/login",
        element: <LoginPage/>
    },
    {
        path:"/registration",
        element: <Registration/>
    },
    {
        path: "/dashboard",
        element: <PrivateRoute><DashboardPage/></PrivateRoute>,
        children:[
            {
                path: "adminhome",
                element: <h1>This home</h1>
            },
            {
                path: "mycart",
                element: <PrivateRoute><MyCart/></PrivateRoute>
            },
            {
                path: "alluser",
                element: <Alluser/>
            }
        ]
    }
]);



export default route;