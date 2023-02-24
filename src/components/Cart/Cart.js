import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { DecCart, delCart, IncCart } from '../redux/actions/Actions'
const Cart = () => {
    const state = useSelector(state => state)
    console.log(state)
    const dispatch = useDispatch()
    const removeFromCart = (product) => {
        dispatch(delCart(product))
    }
    const addQun = (product) => {
        dispatch(IncCart(product))
    }
    const decQun = (product) => {
        dispatch(DecCart(product))
    }
    return (
        <div className='d-flex flex-wrap gap-5 p-3'>
            {state.length ? state.map(item =>
                <div key={item.id} className=' col-md-11 col-11 col-lg-5 d-flex align-items-center gap-5 mt-4'>
                    <img className='w-50' src={item.image} alt={item.title} height='330px' />
                    <div className='card-body'>
                        <h2 className='card-title'>{item.title.substring(0, 10)}</h2>
                        <p>{item.description.substring(0, 40)}</p>
                        <span className=' my-2 me-4 d-inline-block'><i onClick={() => addQun(item)} className='p-3 fa fa-plus text-primary'></i></span>
                        <span
                            className=' my-2 d-inline-block  pointer'>
                            <i onClick={() => decQun(item)} className='p-3 fa fa-minus text-danger'></i>
                        </span>
                        <p className='my-3'>Quantitiy : <span className='fw-bold fs-3 text-info'>{item.qun}</span></p>
                        <button className='w-50 btn btn-danger' onClick={() => removeFromCart(item)}>Remove</button>
                    </div>
                </div>
            ) : <p className='bg-dark text-white p-4 text-center w-100'>'No Items In Cart'</p>
            }
        </div >
    )
}

export default Cart
