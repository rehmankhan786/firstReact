import React, { useState, useEffect } from 'react'
import './todo.css'

const getLocalData = () => {
    const list = JSON.parse(localStorage.getItem('TodoList'))
    if (list) {
        return list
    }
    else {
        return []
    }
}

var mystyle = { color: "purple" }

const Todo = () => {
    const [inputData, setInputData] = useState("")
    const [items, setItems] = useState(getLocalData())
    const [isEditItem, setIsEditItem] = useState("")
    const [toggleBtn, setToggleBtn] = useState(false)


    // add item
    const addItem = () => {
        if (!inputData) {
            alert("please Enter Some Data")
        }
        else if (inputData && toggleBtn) {
            setItems(
                items.map((Elem) => {
                    if (Elem.id === isEditItem) {
                        return { ...Elem, name: inputData }

                    }
                    return Elem

                })
            )
            setInputData("")
            setToggleBtn(false)
        }
        else {
            const newAddItem = {
                id: new Date().getTime().toString(),
                name: inputData,
            }
            setItems([...items, (newAddItem)])
            setInputData('')
            setToggleBtn(false)
        }
    }
    // edit Item

    const editItem = (index) => {

        const edited_item = items.find((Elem) => {
            return Elem.id === index
        })
        setIsEditItem(index)
        setInputData(edited_item.name)
        setToggleBtn(true)

    }

    // delete item 


    const deleteItem = (index) => {
        //   var b = confirm("Are You Really Want To Delete This Item?")


        var confirmation = prompt("Are You Sure?")
        if (confirmation === 'y' || confirmation === "yes") {

            const updateItem = items.filter((Elem) => {

                return Elem.id !== index;
            })

            setItems(updateItem)
        }
        else {
            return items
        }
    }



    useEffect(() => {
        localStorage.setItem("TodoList", [JSON.stringify(items)])


    }, [items]);



    const colorizer = (e) => {

        setInputData(e.target.value)
        if (e.target.value !== '') {
            return mystyle = { background: "purple", color: 'white' }

        }

        else {
            return mystyle = { background: '#edebeb', color: "purple" }

        }


    }

    return (
        <div id='main_div'>
            <div id='image' >

                <img src="./images/frontend.png" alt="" />

            </div>
            <div id='caption ' className='text-center'><h2>Todo List</h2> </div>
            <div id='inputs_inside'>
                <input type="text"  value={inputData} onChange={colorizer} placeholder="👉 Write Todo Here" id='Enter_data' autoComplete='off' />

                <button id='submit' style={mystyle} onClick={addItem} >
                    {toggleBtn ? (<i className='fa fa-edit' style={mystyle}></i>) : (<i className='fa fa-plus' style={mystyle}></i>)}
                </button>

            </div>
            {/* to show todo list  */}
            {items.map((Elem) => {
                return (
                    <div id='todolist' key={Elem.id}>
                        <div id='todo_name' >{Elem.name}</div>
                        <div id='edit' onClick={() => editItem(Elem.id)}><i className='far fa-edit'></i></div>
                        <div id='trash' onClick={() => deleteItem(Elem.id)} ><i className='far fa-trash-alt'></i></div>

                    </div>
                )

            })}
            <div><button id='removeAll' className='btn btn-outline-danger remove_btn' data-sm-link-text="Remove All" onClick={() => setItems([])}>CheckList</button>  </div>


        </div>
    )
}

export default Todo
