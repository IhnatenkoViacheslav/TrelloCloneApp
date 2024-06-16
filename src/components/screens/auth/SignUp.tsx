import axios from 'axios'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IAuthForm } from '../../../types/auth.types'

const API_KEY = 'AIzaSyAEtGdM2d6OVz9duPnOD6SZfK5AtRfmQSU'

const SignUp: FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors }
  } = useForm<IAuthForm>({
    mode: 'onChange'
  })
  const onSubmit: SubmitHandler<IAuthForm> = async (data: IAuthForm) => {
    try {
      let response = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
        { ...data, returnSecureToken: true }
      )
      if (response) {
      }
    } catch (err) {
      console.log(err)
    } finally {
      reset()
    }
  }

  return (
    <form
      className="flex flex-col gap-4 px-10 py-4 text-sm "
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col">
        <label htmlFor="name">Your name</label>
        <input
          className="bg-white py-2 px-4 rounded-xl min-w-80 outline-none"
          type="text"
          placeholder="Name"
          {...register('name', {
            required: 'This field if required'
          })}
        />
        {errors.name?.message}
      </div>

      <div className="flex flex-col">
        <label htmlFor="email">Email</label>
        <input
          className="bg-white py-2 px-4 rounded-xl min-w-80 outline-none"
          type="text"
          placeholder="E-mail"
          {...register('email', {
            required: 'This field if required',
            pattern: {
              value: /^[A-Z0-9./%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: 'Invalid email address'
            }
          })}
        />
        {errors.email?.message}
      </div>
      <div className="flex flex-col">
        <label htmlFor="password">Password</label>
        <input
          className="bg-white py-2 px-4 rounded-xl min-w-80 outline-none"
          type="text"
          placeholder="Password"
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 10,
              message: 'Password is too short'
            }
          })}
        />
        {errors.password?.message}
      </div>
      <input
        className="mt-8 bg-[#FCC9CD] border-2 border-[#FCC9CD] py-2 px-10 rounded-xl cursor-pointer hover:bg-[#EFE5EC] transition-all min-w-80 outline-none"
        id="submitBtn"
        type="submit"
        placeholder="Sign in"
      />
    </form>
  )
}

export default SignUp
