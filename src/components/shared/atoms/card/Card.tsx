import './Card.scss'

interface Props {
  children: React.ReactNode
}

export const Card: React.FC<Props> = ({ children }) => {
  return <div className="card">{children}</div>
}
