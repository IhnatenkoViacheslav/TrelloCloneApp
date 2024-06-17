import { ChangeEventHandler, forwardRef } from 'react'

interface InputFieldProps {
  id: string
  label: string
  extra?: string
  placeholder: string
  variant?: string
  state?: 'error' | 'success'
  disabled?: boolean
  type?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
  isNumber?: boolean
}

export const Field = forwardRef<HTMLInputElement, InputFieldProps>(
  (
    { label, id, extra, type, placeholder, state, disabled, isNumber, ...rest },
    ref
  ) => {
    return (
      <div className={`${extra}`}>
        <label
          htmlFor={id}
          className="text-sm text-white/60 dark:text-white ml-1.5 font-medium"
        >
          {label}
        </label>
        <input
          type={type}
          ref={ref}
          disabled={disabled}
          id={id}
          placeholder={placeholder}
          className=""
          onKeyDown={(event) => {
            if (
              isNumber &&
              !/[0-9]/.test(event.key) &&
              event.key !== 'Backspace' &&
              event.key !== 'Tab' &&
              event.key !== 'Enter' &&
              event.key !== 'ArrowLeft' &&
              event.key !== 'ArrowRight'
            ) {
              event.preventDefault()
            }
          }}
          {...rest}
        />
      </div>
    )
  }
)

Field.displayName = 'field'
