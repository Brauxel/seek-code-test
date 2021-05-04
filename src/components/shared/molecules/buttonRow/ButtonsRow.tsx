import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import { Button } from '../../atoms/button/Button'
import './ButtonsRow.scss'

interface ButtonAttributes
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  value: string
  name: string
  label: string
}

interface Props {
  title?: string
  buttons: ButtonAttributes[]
  activeButton?: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export const ButtonsRow: React.FC<Props> = ({
  title,
  buttons,
  activeButton,
  onClick,
}) => (
  <div className="buttons-row">
    {title && <h3>select customer Type</h3>}
    <div className="buttons-row__holder">
      {buttons.map(({ name, value, label }) => (
        <Button
          appearance={activeButton === value ? 'primary' : 'secondary'}
          key={value}
          value={value}
          name={name}
          onClick={onClick}
        >
          {label}
        </Button>
      ))}
    </div>
  </div>
)
