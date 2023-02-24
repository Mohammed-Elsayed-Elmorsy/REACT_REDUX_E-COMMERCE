import React, { useEffect, useState } from 'react'
import Product from '../Product/Product'
import { NavLink } from 'react-router-dom'
const Products = () => {
    const [data, setData] = useState([])
    const [filter, setFilter] = useState([])
    const [laoding, setLoading] = useState(false)
    const [cart, setCart] = useState(true)
    let componentMounted = true
    useEffect(() => {
        const GetData = async () => {
            setLoading(true)
            try {
                const response = await fetch('https://fakestoreapi.com/products')
                if (componentMounted) {
                    setData(await response.clone().json())
                    setFilter(await response.json())
                    setLoading(false)
                }
            }
            catch {
                throw (Error('Went Wrong'))
            }
        }
        GetData()
    }, [])

    const getCategory = (cat) => {
        const updated = filter.filter(item => item.category === cat)
        setData(updated)
    }

    return (
        <div className='container'>
            <div className='my-5 py-3 text-center'>
                <button className='btn btn-outline-dark btn-light me-3' onClick={() => setData(filter)} >All</button>
                <button className='btn btn-outline-dark btn-light me-3' onClick={() => getCategory("men's clothing")}>men</button>
                <button className='btn btn-outline-dark btn-light me-3' onClick={() => getCategory("jewelery")}>jewelery</button>
                <button className='btn btn-outline-dark btn-light me-3' onClick={() => getCategory("women's clothing")}>Women</button>
                <button className='btn btn-outline-dark btn-light me-3' onClick={() => getCategory("electronics")}>Electronics</button>
            </div>
            <div className='products'>
                {laoding ? 'Loading' : data.map(item => {
                    return <div className="card product" key={item.id} >
                        <img className="card-img-top" src={item.image} alt="Card image cap" height='290px' />
                        <div className="card-body">
                            <h5 className="card-title">{item.title.substring(0, 12)}</h5>
                            <p className="card-text">{item.description.substring(0, 25)}</p>
                            <h2 className="">${item.price}<i className='fa fa-check fs-4'></i></h2>
                            <NavLink to={`/products/${item.id}`} className="w-100 btn btn-success">Buy Now</NavLink>
                            {/* <button className="w-100 my-2 btn btn-primary">' Add To Cart '</button> */}
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Products
