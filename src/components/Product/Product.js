import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addCart } from '../redux/actions/Actions'
const Product = () => {
    let { id } = useParams()
    const [loading, setloading] = useState(false);
    const [product, setproduct] = useState({});
    useEffect(() => {
        setloading(true)
        const getData = async () => {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`)
            setproduct(await response.json())
            setloading(false)
        }
        getData()
    }, [])
    const dispatch = useDispatch()
    const AddToCart = () => {
        dispatch(addCart(product))
    }
    return (
        <>
            {loading ? 'Loading' :
                <div key={product.id} className=" container d-md-flex align-items-center gap-5 mt-4">
                    <img height='350px' className="card-img-top w-50" src={product.image} alt={product.title} />
                    <div className="card-body m-md-0 m-4">
                        <h5 className="card-title fw-bold mb-3">{product.title}</h5>
                        <p className="card-text">{product.description}</p>
                        <h2 className='fw-bold'>${product.price}</h2>
                        <p className="card-text">{product.rating && product.rating.rate}<i className='ms-2 text-warning fa fa-star'></i></p>
                        <p className="card-text">{product.rating && product.rating.count} Bought</p>
                        <button onClick={() => AddToCart(product)} className='btn btn-success w-50 me-2'>Add To Cart</button>
                        <NavLink to='/cart' className='fs-6 btn btn-primary w-25'>Go To Cart</NavLink>
                    </div>
                </div>
            }
        </>
    )
}

export default Product
