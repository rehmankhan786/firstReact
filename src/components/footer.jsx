import React from 'react'
import '../static/footer.css'

const Footer = (props) => {
    return (
        <div className="footer" >
           CopyRight &copy; rehmanportfolioR.herokuapp.com    {props.name}

        </div>
    )
}

export default Footer
