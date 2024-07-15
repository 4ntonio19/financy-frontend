import React from 'react'
import { SButton } from './styles'

type Props = {
    type?: 'submit' | 'button'
    styles?: React.CSSProperties
    children: React.ReactNode
    onClick: () => void
}

const Button = ({ type = 'submit', styles, children, onClick }: Props) => {
  return (
    <SButton type={type} style={styles} onClick={onClick} >
        {children}
    </SButton>
  )
}

export default Button
