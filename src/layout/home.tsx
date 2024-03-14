import React from 'react'
import Productlist from '../components/productlist'
import Slider from '../components/slider'
import Header from '../components/header'

type Props = {}

const Home = (props: Props) => {
  return (
    <>
    <Header/>
    <Slider/>
    <Productlist/>
    </>
  )
}

export default Home