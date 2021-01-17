import React from "react";
import Login from '../Pages/Login';
import Dashboard from '../Pages/Dashboard';
import PageNotFound from '../Pages/NotFound';


 
const routes =[
  {
    path:'/dashboard',
    component: Dashboard,
    isPrivate: true
  },
  {
    path:'/notfound',
    component: PageNotFound,
    isPrivate: true
  },
  {
    path:'/',
    component: Login,
    isPrivate: false
  },
  {
    path:'/*',
    component: PageNotFound,
    isPrivate: true
  },
]
 
export default routes


