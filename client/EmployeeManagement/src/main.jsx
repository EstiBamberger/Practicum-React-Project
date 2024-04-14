import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AddEmployee from './components/addEmployee/AddEmployee.jsx'
import EmployeeTable from './components/employeeTable/EmployeeTable.jsx'
import LogIn from './components/logIn/LogIn.jsx'
import LogOut from './components/logOut/LogOut.jsx'
import AdminStore from './stores/AdminStore.js'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>not found</div>,
    children: [
      {
        index: true,
        element: <EmployeeTable />,
        errorElement: <div>not found</div>
      },
      {
        path: 'employeeTable',
        element: <EmployeeTable />,
        errorElement: <div>not found</div>
      },
      {
        path: 'addEmployee',
        element: AdminStore.isLogin ? <AddEmployee /> : <EmployeeTable />,
        errorElement: <div>not found</div>
      },
      // {
      //   path: 'editEmployee',
      //   element:<EditEmployee choices={choices}/>,
      //   errorElement: <div>not found</div>
      // },
      {
        path: 'signIn',
        element: < LogIn />,
        errorElement: <div>not found</div>
      }
      ,
      {
        path: 'signOut',
        element: < LogOut />,
        errorElement: <div>not found</div>
      }
    ]
  },


]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)



