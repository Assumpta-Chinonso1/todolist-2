import React from 'react'
import { useState } from 'react'
import styles from './Form.module.css'

const Form = ({todos, setTodos}) => {
    //const [todo, setTodo] = useState("")
    const [todo, setTodo] = useState({name: "", done: false})
 
   
    function handlesubmit(e) {
        e.preventDefault()
        
        setTodos([...todos,todo])   
        setTodo({name: "", done: false})    
    }
    
  return (
    <form className={styles.todoform} onSubmit={handlesubmit}>
        <div className={styles.container}>
        <input className={styles.input} onChange={(e)=> 
                setTodo({name:e.target.value, done: false})} 
                value={todo.name}
                 type="text" 
                 placeholder='Enter Todo Item'/>
            <button className={styles.button} type='submit'>Add</button>
        </div>
         
        </form>
  )
}

export default Form