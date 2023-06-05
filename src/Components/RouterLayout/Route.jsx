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
import AddItem from "../PageLayout/DashboardPage/Components/AddItem";
import AdminRouter from "../AuthContextLayout/AdminRouter";
import PaymentLayout from "../PageLayout/DashboardPage/AllUser/PaymentLayout";

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
                element: <AdminRouter><h1>this is admin Home</h1></AdminRouter>
            },
            {
                path: "mycart",
                element: <PrivateRoute><MyCart/></PrivateRoute>
            },
            {
                path: "alluser",
                element: <AdminRouter><Alluser/></AdminRouter>
            },
            {
                path: "additem",
                element: <AdminRouter><AddItem/></AdminRouter>
            },
            // normal user route is here
            {
                path: "userhome",
                element: <h1>this is user Home</h1>
            },
            {
                path: "payment",
                element: <PaymentLayout/>
            }
        ]
    }
]);



export default route;