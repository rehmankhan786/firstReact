import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
           



                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <div className="container-fluid nav_bg">
                                <NavLink className="navbar-brand span-blue" to="/">Atta Ur Rehman</NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav mb-2 mb-lg-0 ms-auto ">
                                        <li className="nav-item mx-2">
                                            <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
                                        </li>
                                        <li className="nav-item mx-2">
                                            <NavLink className="nav-link" to="/about">About</NavLink>
                                        </li>
                                        <li className="nav-item mx-2">
                                            <NavLink className="nav-link" to="/services">Services</NavLink>
                                        </li>
                                        <li className="nav-item mx-2">
                                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                                        </li>
                                        <li className="nav-item mx-2">
                                            <NavLink className="nav-link" to="/project">Projects</NavLink>
                                        </li>
                                       

                                    </ul>

                                </div>
                            </div>
                        </nav>


                    </div>

                


    )
}

export default Navbar
