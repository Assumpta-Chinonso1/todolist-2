import React from 'react'
import styles from './TodoItem.module.css'

const TodoItem = ({item, todos, setTodos}) => {

  function handleDelete(item) {
    console.log("deleted", item);
    setTodos(todos.filter((todo)=> todo !== item))
    
  }
  function handleClick(name) { 
    setTodos( todos.map((todo)=>todo.name===name ? {...todo, done: !todo.done}: todo))
    
    
  }

  const ClassName = item.done ? styles.completed : ""
  return (
      <div className={styles.item}>
          <div className={styles.itemName}>
            <span className={ClassName} onClick={()=>handleClick(item.name)}>
            {item.name}
            </span>
         
          <span>
            <button onClick={()=>handleDelete(item)} className={styles.deleteButton}>X</button>
        </span>
        </div>
        <hr className={styles.line} />   
      </div>
  )

}

export default TodoItem