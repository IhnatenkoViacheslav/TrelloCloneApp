import { ButtonHTMLAttributes, FC } from 'react'

type TypeButton = ButtonHTMLAttributes<HTMLButtonElement>

export const Button: FC<TypeButton> = ({ children, className, ...rest }) => {
  return (
    <button
      className="linear rounded-2xl bg-transparent border-2 border-primary py-2 px-7 text-base font-medium text-white transition-all hover:bg-primary active:bg-brand-700"
      {...rest}
    >
      {children}
    </button>
  )
}
