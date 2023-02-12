const WarrningMessage = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-6 bg-gradient-to-b from-gray-100 to-gray-200 p-10 rounded-md font-semibold shadow-xl'>
      <h1 className='text-xl'>You need to login to see the comments</h1>
      <div className='flex gap-6'>
        <div className='flex flex-col items-center justify-center bg-gradient-to-br from-green-400 to-green-500 p-4 rounded-md shadow-md'>
          <p>Already have an account?</p>
          <a
            href='/login'
            className='text-gray-50'
          >
            Login
          </a>
        </div>
        <div className='flex flex-col items-center justify-center bg-gradient-to-br from-red-400 to-red-500 p-4 rounded-md shadow-md'>
          <p>Don't have an account?</p>
          <a
            href='/register'
            className='text-gray-50'
          >
            Register
          </a>
        </div>
      </div>
    </div>
  )
}

export default WarrningMessage
