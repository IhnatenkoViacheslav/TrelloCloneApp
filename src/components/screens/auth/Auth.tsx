import { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import { IAuthForm } from '../../../types/auth.types'
import SignIn from './SignIn'
import SignUp from './SignUp'

const Auth: FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<IAuthForm>({
    mode: 'onChange'
  })

  const [isLoginForm, setIsLoginForm] = useState(false)

  // const {} = useMutation({
  //   mutationKey: ['auth'],
  //   mutationFn: (data: IAuthForm) =>
  // })

  return (
    <div className="grid grid-cols-2">
      <div>
        <img src="./bg2.jpg" alt="BG" />
      </div>
      <div className="flex flex-col justify-start items-center bg-gradient-to-br from-[#F8EBEE] to-[#EBE3EC] ">
        {isLoginForm ? <SignIn /> : <SignUp />}
        <div className="text-xs flex z-10 gap-2">
          <p>
            {isLoginForm ? 'Create new account' : 'Already have an account?'}
          </p>
          <button
            className="font-bold hover:underline"
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
