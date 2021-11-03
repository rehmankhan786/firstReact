import React from 'react'
import '../static/card.css'
const Card = ({ menuData }) => {
    return (
        <>
            <div id='card'>
                {menuData.map((Elem) => {

                    return (<>
                        <div id="card_body">


                            <div id='card_copy'>{Elem.id}</div>

                            <div id='card_image'>
                                <img src={Elem.image} alt=""/>
                            </div>
                            <div id='card_title'>
                                {Elem.title}
                            </div>
                            <div id='card_content'>
                                {Elem.desc}
                            </div>

                        </div>
                    </>)

                })}
            </div>



        </>

    )
}

export default Card
