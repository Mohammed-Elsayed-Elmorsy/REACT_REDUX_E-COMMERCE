import React from 'react'
import Hero from '../components/Hero/Hero'
import Navbar from '../components/Navbar/Navbar'
import Products from '../components/Products/Products'

const Home = () => {
    return (
        <>
            <Hero />
            <h1 className='latest container text-center p-5'>
                Latest Products
            </h1>
            <Products />
        </>
    )
}

export default Home
