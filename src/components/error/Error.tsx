import React from 'react'
import styles from './Error.module.css'

interface errorMessage {
  title?: string,
  message: string,
  className? : string
}

const Error: React.FC<errorMessage> = ({ message, className }) => {
  return (
    <p className={className ? className : styles.error_container}>{message}</p>
  )
}

export default Error