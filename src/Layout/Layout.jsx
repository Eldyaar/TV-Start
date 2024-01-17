import React from 'react' 
import Nav from "../Nav/Nav"
import Footer from "../Footer/Footer"
import { Outlet } from 'react-router-dom';
import IconBfb from '../IconBfb/IconBfb';
import Form from '../ApplicationForm/ApplicationForm'


const Layout = () => {
  return (
    <div>
      <Nav/>
      <Outlet/>
      <IconBfb/>
      <Form />
      <Footer/>
    </div>
  )
}

export default Layout;