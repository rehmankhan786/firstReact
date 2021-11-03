import React from 'react'
import './services.css'
import {NavLink} from 'react-router-dom'
const service = [
    {
    image: 'images/frontend.png',
    title: "Web Development",
    desc: 'I can create an Attractive and Responsive Single Page Website as well as Multiple Page website ',


},
    {
    image: 'images/maintenance.png',
    title: "Website changes",
    desc: 'I can update you old Slow website to new Modern website with single page application',


},
    
    
]



const Services = () => {
    return (
        <div className='services'>
            <h2 className='span-blue'>Our Services</h2>
            <div className='card_Box'>
                {service.map((Elem) => {
                    return (

                        <div className='myCard'>
                            <img src={Elem.image} alt="" />
                            <div className='Card_title'>{Elem.title}</div>
                            <hr />
                            <div className='Card_desc'>{Elem.desc}</div>
                        </div>


                    )
                })}


            </div>
<p className='knowMore'>Want to know more About Me? <br/><span className='mt-3'><NavLink className='btn btn-warning mt-2' to='/about'>Click here</NavLink></span> </p>
        </div>
    )
}

export default Services
