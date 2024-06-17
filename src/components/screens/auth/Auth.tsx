import { useMutation } from '@tanstack/react-query'
import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IoEnterOutline, IoLockClosedOutline } from 'react-icons/io5'
import { MdOutlineMail } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { authService } from '../../../services/auth.service'
import { IAuthForm } from '../../../types/auth.types'

const Auth: FC = () => {
  const navigate = useNavigate()

  const [isLoginForm, setIsLoginForm] = useState(false)

  const { mutate } = useMutation({
    mutationKey: ['auth'],
    mutationFn: (data: IAuthForm) =>
      authService.main(isLoginForm ? 'InWithPassword' : 'Up', data),
    onSuccess() {
      toast.success('Succesfully logged in')
      reset()
      navigate('/home')
    }
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<IAuthForm>({
    mode: 'onChange'
  })

  const onSubmit: SubmitHandler<IAuthForm> = async (data: IAuthForm) => {
    mutate(data)
  }

  return (
    <div className="grid grid-cols-2 h-screen">
      <div className="gradient_background flex items-end p-10">
        <p className="text-white font-bold text-4xl">
          Unleash your productivity today.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center bg-[#010101] h-full">
        <div className="-mt-4">
          <h1 className="font-bold text-xl text-white">
            {isLoginForm ? 'Sign In To Your Account.' : 'Create Your Account.'}
          </h1>
          <p className="text-sm text-white text-opacity-50">
            {isLoginForm
              ? "Let's sign in to your account and get started."
              : "Let's create a new account."}
          </p>
        </div>
        <form
          className="flex flex-col justify-center gap-2 px-10 py-4 text-sm"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col text-white relative">
            <label htmlFor="email">Email</label>
            <input
              className="bg-[#1E293B] border-2 border-[#2F3B49] py-2 pl-10 pr-2 rounded-3xl min-w-80 outline-none placeholder-current"
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
            <MdOutlineMail className="absolute top-11 left-3" size={20} />
            <p className="text-[#3628c5] text-xs">{errors.email?.message}</p>
          </div>
          <div className="flex flex-col text-white relative">
            <label htmlFor="password">Password</label>
            <input
              className="bg-[#1E293B] border-2 border-[#2F3B49] py-2 pl-10 pr-2 rounded-3xl min-w-80 outline-none placeholder-current"
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
            <IoLockClosedOutline className="absolute top-11 left-3" size={20} />
            <p className="text-[#3628c5] text-xs">{errors.password?.message}</p>
          </div>
          <button
            type="submit"
            className="text-white mt-8 bg-[#3628c5] border-2 border-[#3628c5] py-2 px-10 rounded-3xl cursor-pointer flex items-center justify-center gap-2 hover:bg-[#261c93] transition-all"
          >
            <p>{isLoginForm ? 'Sign in' : 'Sign up'}</p>
            <IoEnterOutline className="mt-1" size={25} />
          </button>
        </form>
        <div className="text-xs flex z-10 gap-2 text-white">
          <p>
            {isLoginForm ? 'Create new account' : 'Already have an account?'}
          </p>
          <button
            className="text-[#3628c5] font-bold hover:underline transition-all"
            onClick={() => setIsLoginForm(!isLoginForm)}
          >
            {isLoginForm ? 'Sign up' : 'Sign in'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Auth
