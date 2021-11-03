import React from 'react'
import './navbar.css'


const Navbar = ({ menuData, filter }) => {
    return (
        <div id='navbar'>
            <div id='nav_inside'>

                {menuData.map((Elem) => {

                    return (

                        <>
                            <button className='btn btn-outline-success' onClick={() => filter(Elem)} >{Elem}</button>
                        </>

                    )
                })}
            </div>

        </div>
    )
}


export default Navbar
