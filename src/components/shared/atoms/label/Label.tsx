import { LabelHTMLAttributes } from 'react'
import './Label.scss'

interface Props extends LabelHTMLAttributes<HTMLLabelElement> {
  children: string
}

export const Label: React.FC<Props> = ({ children, ...labelProps }) => (
  <label className="label" {...labelProps}>
    {children}
  </label>
)
