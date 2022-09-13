import { InputGroup, Input } from '@chakra-ui/react';
import React, {useState, useContext} from 'react'
import {TodosContext} from "./Todos"

function AddToDo() {
    const [item, setItem] = useState("")
    const {todos, fetchTodos} = useContext(TodosContext)

    const handleInput = event =>{
        setItem(event.targe.value);
    }
    const handleSubmit =event=>{
        const newTodo={
            "id": todos.length +1,
            "item":item
        }
        fetch("http://localhost:8000/todo",
        {
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(newTodo)
        }).then(fetchTodos)


    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <InputGroup>
            <Input
                pr="4.5rem"
                type="text"
                placeholder="Add a todo item"
                aria-label="Add a todo item"
                onChange={handleInput}
            />
            </InputGroup>
        </form>
    </div>
  )
}

export default AddToDo