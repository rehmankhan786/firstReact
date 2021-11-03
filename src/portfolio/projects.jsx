import React from 'react'
import Todo from '../todoList/todo'
import Home from '../components/home.jsx'

const Project = () => {
    return (
        <div className='projects'>
<h2 className='text-center'>1. Todo List</h2>
            <Todo/>
<h2 className='text-center'>Categorywise Selector</h2>
<Home/>

            
        </div>
    )
}

export default Project
