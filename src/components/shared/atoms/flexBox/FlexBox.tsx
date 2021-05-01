import './FlexBox.scss'

interface Props {
  children: React.ReactNode
}

export const FlexBox: React.FC<Props> = ({ children }) => (
  <div className="flex-box">{children}</div>
)
