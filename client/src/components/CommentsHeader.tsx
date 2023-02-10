import { FiLogOut } from 'react-icons/fi'

const CommentsHeader = () => {
  return (
    <div className='flex w-full justify-between p-10'>
      <div className='flex items-center gap-4 font-semibold'>
        <h2>Comments </h2>
        <span className='w-10 h-10 bg-gradient-to-b from-yellow-200 to-yellow-500 flex justify-center items-center rounded-full shadow-xl shadow-yellow-200'>
          34
        </span>
      </div>
      <button title='Log out'>
        <FiLogOut className='w-6 h-6' />
      </button>
    </div>
  )
}

export default CommentsHeader
