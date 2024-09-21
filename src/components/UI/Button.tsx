import React, { ReactNode } from 'react'

interface ButtonProps  {
    children? : ReactNode,
    className?: string,
    onClick?: () => void,
    type?: 'submit' | 'reset' | 'button'
}

const Button: React.FC<ButtonProps> = ({children, onClick, className, type}) => {
  return (
    <button type={type} className={className} onClick={onClick}>{children}</button>
  )
}

export default Button