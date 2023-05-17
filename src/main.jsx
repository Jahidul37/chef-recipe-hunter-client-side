import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Main from './Components/Header/Main/Main';
import Home from './Components/Home/Home';
import Blog from './Components/Blog/Blog';
import Login from './Components/Login/Login';
import ShapeDetail from './Components/ShapeDetail/ShapeDetail';
// import AuthProvider from './Components/AuthProvider/AuthProvider';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import AuthProvider from './Components/AuthProvider/AuthProvider';
import Register from './Components/Login/Register/Register';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch(`http://localhost:5000/cookdata`),

      },
      {
        path: '/blog',
        element: <Blog></Blog>,
        loader: () => fetch(`http://localhost:5000/blogdata`)
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
        path: "chef/:id",
        element: <PrivateRoute><ShapeDetail></ShapeDetail></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/cookdata/${params.id}`)
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>

  </React.StrictMode>
);
