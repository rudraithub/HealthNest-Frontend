import React from 'react'
import styles from './Success.module.css'

interface successMessage {
  title?: string,
  message: string,
  className? : string
}

const Success: React.FC<successMessage> = ({ message, className }) => {
  return (
    <p className={className ? className : styles.success_container}>{message}</p>
  )
}

export default Success