import React from 'react'
import styles from './Footer.module.css'
const Footer = ({completedTodos, totalTodos}) => {
  return (
    <div className={styles.footer}>
      <span className={styles.spanItem}>Completed Todos: {completedTodos}</span>  
      <span className={styles.spanItem}> Total Todos: {totalTodos}</span>
    </div>
  )
}

export default Footer