import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

interface Props {
  setUser: React.Dispatch<React.SetStateAction<any>>
}

const LoginRegisterPage = ({ setUser }: Props) => {
  const [isLogin, setIsLogin] = useState(true)
  const [values, setValues] = useState({
    name: '',
    username: '',
    password: '',
  })
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (location.pathname === '/login') {
      setIsLogin(true)
    } else if (location.pathname === '/register') {
      setIsLogin(false)
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (isLogin) {
      const res = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })
      const data = await res.json()
      if (data.data) {
        setUser(data.data.user)
        navigate('/')
        return
      }
    }

    try {
      const res = await fetch('http://localhost:3000/api/users', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const data = await res.json()
      const user = data.data.users.find(
        (user: any) => user.username === values.username
      )
      if (user) return alert('User already exists')
      const res2 = await fetch('http://localhost:3000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })
      const data2 = await res2.json()
      if (data2.data) {
        setIsLogin(true)
        navigate('/login')
        return
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='flex justify-center items-center h-screen w-screen'>
      <form
        className='flex flex-col items-center justify-center w-96 gap-6'
        onSubmit={handleSubmit}
      >
        <h1 className='font-semibold text-xl'>
          {isLogin ? 'Login' : 'Register'}
        </h1>
        {!isLogin && (
          <input
            type='text'
            placeholder='Enter your name...'
            className='w-full p-4 rounded-md outline-none bg-gradient-to-br from-gray-100 to-gray-200 shadow-md'
            name='name'
            value={values.name}
            onChange={handleChange}
            required
          />
        )}
        <input
          type='text'
          placeholder='Enter your username or email...'
          className='w-full p-4 rounded-md outline-none bg-gradient-to-br from-gray-100 to-gray-200 shadow-md'
          name='username'
          value={values.username}
          onChange={handleChange}
          required
        />
        <input
          type='password'
          placeholder='Enter your password...'
          className='w-full p-4 rounded-md outline-none bg-gradient-to-br from-gray-100 to-gray-200 shadow-md'
          name='password'
          value={values.password}
          onChange={handleChange}
          required
        />
        <button
          type='submit'
          className='w-full p-4 rounded-md font-semibold bg-gradient-to-br from-cyan-100 to-cyan-200 shadow-cyan-200'
        >
          {isLogin ? 'Login' : 'Register'}
        </button>
      </form>
    </div>
  )
}

export default LoginRegisterPage
