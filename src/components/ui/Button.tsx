import { FC } from 'react'

interface IButton {
  buttonText: string
  action?: () => void
}

const Button: FC<IButton> = ({ buttonText, action }) => {
  return <button className="py-2 bg-white px-4 rounded-xl">{buttonText}</button>
}

export default Button
