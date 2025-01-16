import React from 'react'
import styles from './TodoItem.module.css'

const TodoItem = ({item}) => {
  return (
      <div className={styles.item}>

        <div className={styles.itemName}>
        <h3>  {item}</h3>
        <hr className={styles.line} />
        </div>
      </div>
  )

}

export default TodoItem