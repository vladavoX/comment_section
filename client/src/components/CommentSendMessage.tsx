import { FiArrowRight } from 'react-icons/fi'

const CommentSendMessage = () => {
  return (
    <form
      action=''
      className='bg-gray-100 w-full h-20 flex justify-between'
    >
      <input
        type='text'
        placeholder='Type a comment...'
        className='w-full h-full p-5 outline-none'
      />
      <button className='w-20 bg-cyan-300 shadow-cyan-200 shadow-lg flex justify-center items-center'>
        <FiArrowRight className='w-6 h-6' />
      </button>
    </form>
  )
}

export default CommentSendMessage
