import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
    const state = useSelector(state => state)
    return (
        <nav className="p-2 p-md-5  bg-light d-block d-lg-flex justify-content-between align-items-center">
            <NavLink to="/" className="d-block text-dark p-2">
                <h2><i className="fa fa-shopping-cart text-warning"></i> SHOPPING</h2>
            </NavLink>
            <ul className="d-flex my-5 my-lg-0 ">
                <li>
                    <NavLink className="btn btn-light btn-outline-dark fs-6" to='/'>Home</NavLink>
                </li>
                <li className="mx-5">
                    <NavLink className="btn btn-light btn-outline-dark fs-6" to='/products'>Products</NavLink>
                </li>
                <li>
                    <NavLink className="btn btn-light btn-outline-dark fs-6" to='/contact'>Contact</NavLink>
                </li>
            </ul>
            <div className="btns">
                <NavLink to='/login' className="btn btn-light btn-outline-dark fs-6 ">Log In <i className="fa fa-sign-in"></i></NavLink>
                <NavLink to='/register' className="btn btn-light btn-outline-dark fs-6 mx-4">Register <i className="fa fa-user-plus"></i></NavLink>
                <NavLink to='/cart' className="btn btn-light btn-outline-dark fs-6 ">cart ( {state.length} ) <i className="fa fa-shopping-cart"></i></NavLink>
            </div>
        </nav>
    );
};

export default Navbar;
