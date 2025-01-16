import React from 'react'
import TodoItem from './TodoItem'
import styles from './TodoList.module.css'

const TodoList = ({todos}) => {
  return (
    <div className={styles.todolist}>
          {todos.map((item)=>(
                   <TodoItem key={item} item={item}/>
                ))}
    </div>
  )
}

export default TodoList