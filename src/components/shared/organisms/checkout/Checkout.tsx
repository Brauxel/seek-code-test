interface Props {
  customerType: string
}

export const Checkout: React.FC<Props> = ({ customerType }) => (
  <div>
    <p>checkout for {customerType} customer</p>
  </div>
)
