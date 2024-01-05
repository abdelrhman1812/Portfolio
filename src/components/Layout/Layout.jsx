
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Main from '../Main/Main'
import Sidebar from '../Sidebar/Sidebar'
export default function Layout() {
    return <>
        <Outlet />
        <Sidebar />
        <Header />
        <Main />
    </>

}
