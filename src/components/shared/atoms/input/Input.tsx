import { InputHTMLAttributes } from 'react'
import './Input.scss'

type Props = InputHTMLAttributes<HTMLInputElement>

export const Input: React.FC<Props> = ({ ...inputProps }) => (
  <input className="basic-input" {...inputProps} />
)
