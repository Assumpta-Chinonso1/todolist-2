import React from 'react'
import { useState } from 'react'
import styles from './Form.module.css'

const Form = ({todos, setTodos}) => {
    const [todo, setTodo] = useState("")
 
   
    function handlesubmit(e) {
        e.preventDefault()
        
        setTodos([...todos,todo])   
        setTodo("")    
    }
    
  return (
    <form className={styles.todoform} onSubmit={handlesubmit}>
        <div className={styles.container}>
        <input className={styles.input} onChange={(e)=> 
                setTodo(e.target.value)} 
                value={todo}
                 type="text" 
                 placeholder='Enter Todo Item'/>
            <button className={styles.button} type='submit'>Add</button>
        </div>
         
        </form>
  )
}

export default Form