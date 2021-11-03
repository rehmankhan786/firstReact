import React, { useState } from 'react'
import './contact.css'

const Contact = () => {
    const [data,setData]=useState({
        fullname:"",
        email:"",
        contact:"",
        message:""
    })

const InputEvent = (event)=>{
    const {name,value} = event.target;

    setData((preVal)=>{
        return{
            ...preVal,
            [name]:value,
        }
    })




};
const formSubmit =(e) =>{
 e.preventDefault();
 alert(` your name is ${data.fullname}`)

}


    return (
        <div className='contact_inside'>
            <form className='mt-3' onSubmit={formSubmit}>
                <h2 className='form_head'> Contact Us</h2>
                <div className="form-row">
                    <div className="form-group mt-2 col-7">
                        <label for="inputName">Name</label>
                        <input type="text" className="form-control" id="inputName" placeholder="Enter Full Name"
                        name='fullname'
                        value={data.fullname}
                        onChange={InputEvent}
                        />
                    </div>
                    <div className="form-group mt-3 col-7">
                        <label for="inputEmail">Email</label>
                        <input type="email" className="form-control" id="inputEmail" placeholder=" Enter Your Email Adress" 
                         name='email'
                         value={data.email}
                         onChange={InputEvent}
                        />
                    </div>
                </div>
                <div className="form-group col-7">
                    <label for="inputPhoneNumber">Contact Number:</label>
                    <input type="phone" className="form-control col-6" id="inputPhoneNumber" placeholder="Contact Number"
                     name='contact'
                     value={data.contact}
                     onChange={InputEvent}
                    />
                </div>
                <div className="form-group mt-4 col-7">
                    <label for="inputMessage">Message</label>
                    <textarea type="text" className="form-control col-8" id="inputMessage" placeholder="Enter your Message....."
                     name='message'
                     value={data.message}
                     onChange={InputEvent}
                    />
                </div>





                <button type="submit" className="btn btn-outline-primary">Submit</button>
            </form>
        </div>
    )
}

export default Contact
