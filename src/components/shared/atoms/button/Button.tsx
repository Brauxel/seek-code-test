import cx from 'classnames'
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import './Button.scss'

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  type?: 'submit' | 'button'
  appearance?: 'primary' | 'secondary'
}

export const Button: React.FC<Props> = ({
  type = 'button',
  children,
  className,
  appearance,
}) => {
  const classNames = cx(
    'button',
    {
      [`button--${appearance}`]: appearance,
    },
    className
  )

  return (
    <button
      className={classNames}
      type={type === 'submit' ? 'submit' : 'button'}
    >
      {children}
    </button>
  )
}
