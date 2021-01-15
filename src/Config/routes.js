import React from "react";
import Login from '../Pages/Login';
import Dashboard from '../Pages/Dashboard';
import PageNotFound from '../Pages/NotFound';


 
const routes =[
  {
    path:'/dashboard',
    component: Dashboard
  },
  {
    path:'/notfound',
    component: PageNotFound
  },
  {
    path:'/',
    component: Login
  },
  {
    path:'/*',
    component: PageNotFound
  },
]
 
export default routes


