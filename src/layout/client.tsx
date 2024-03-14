import React from 'react'
import Header from '../components/header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer'
import Productlist from '../components/productlist'
import Slider from '../components/slider'

// type Props = {}

const client = () => {

  return (
    <>
    <Header/>
    <Slider />
    <Productlist/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default client