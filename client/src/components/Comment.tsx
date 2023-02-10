import { RiHeart3Fill, RiHeart3Line } from 'react-icons/ri'

const Comment = () => {
  return (
    <div className='flex p-5 gap-5'>
      <div>
        <p className='h-14 w-14 bg-gradient-to-b from-pink-300 to-pink-400 flex items-center justify-center rounded-full font-semibold text-xl'>
          VA
        </p>
      </div>
      <div className='flex flex-col gap-5 font-medium'>
        <div className='flex gap-2'>
          <p className='font-bold'>Vladimir Aleksic</p>
          <p className='text-gray-600'>•</p>
          <p className='text-gray-600'>5 min ago</p>
        </div>
        <p className='text-gray-600'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
          quam officiis eligendi aliquid eaque excepturi omnis.
        </p>
        <div className='flex w-full justify-between items-center'>
          <button className='text-gray-400'>Like?</button>
          <div className='flex items-center gap-2'>
            <RiHeart3Fill className='w-6 h-6 text-red-500' />
            <p>5</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comment
