import React from 'react'
import { NavLink } from 'react-router-dom'
import './home.css'

const Home = () => {
    return (
        <div className='main_div col-12 '>

            <div className='my_info col-6 d-flex justify-content-center a
            lign-items-center'>
                <div className='mt-5'>

                    <h1> Expand Your Business <br /> with<span className='span-blue' > Atta Ur Rehman</span> </h1>
                    <p><span>-Web developer</span></p>
                <div className='explore' > 
                <NavLink  to='/services' className='btn btn-outline-primary' >Explore</NavLink>
                </div>
            </div>
                </div>
            <div className='_photo mr-auto  '>
                <img src='./images/web.png' className='pr-auto' alt="" />
    
</div>



        </div>
    )
}

export default Home
