import React,{ useState } from 'react'
import Menu from '../static/servicesApi'
import Card from './card'
import Navbar from './navbar'


const uniqueList = [
    ...new Set(Menu.map((Elem)=>{
  return Elem.category;
})
),"All"
]


const Home = () => {
    const [menuData,setMenuData] = useState(Menu)
    const [menuList,setMenuList] = useState(uniqueList)
    
    const filter =(category)=>{
if (category==="All"){

    setMenuData(Menu)
    return;
}

        const updatedList = Menu.filter((Elem)=>{
            return Elem.category === category
        })
        setMenuData(updatedList)

    }


    return (
        <div className="main_box">
            <Navbar menuData = {menuList} filter={filter} />
            <Card menuData ={menuData} />
             
        </div>
    )
}

export default Home
