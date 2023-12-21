import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './../layouts/MainLayout';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import AboutUs from '../pages/AboutUs/AboutUs';
import Dashboard from '../layouts/Dashboard';
import PrivateRoute from './PrivateRoute';
import UserHome from '../pages/UserDashboard/UserHome/UserHome';
import AddTask from '../pages/UserDashboard/AddTask/AddTask';

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/about-us',
                element: <AboutUs></AboutUs>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: 'user-home',
                element: <UserHome></UserHome>
            },
            {
                path: 'add-task',
                element: <AddTask></AddTask>
            }
        ]
    }
]);

export default router;