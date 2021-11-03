import React from 'react'
import About from './about'
import Services from './services'
import Contact from './contact'
import Home from './home'
import Navbar from './navbar'
import Footer from './footer'
import Projects from './projects'

import { Route, Switch } from 'react-router-dom'


const Portfolio = () => {
    return (
        <div className='portfolio' >
        <Navbar/>
            <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route exact path='/home' component={Home}></Route>
                <Route exact path='/about' component={About}></Route>
                <Route exact path='/services' component={Services}></Route>
                <Route exact path='/contact' component={Contact}></Route>
                <Route exact path='/project' component={Projects}></Route>



            </Switch>
            <Footer/>
        </div>
    )
}

export default Portfolio
