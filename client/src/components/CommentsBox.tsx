import CommentsHeader from './CommentsHeader'
import Comment from './Comment'
import CommentSendMessage from './CommentSendMessage'

const CommentsBox = () => {
  return (
    <div className='h-[600px] w-96 bg-gradient-to-b from-gray-100 to-gray-200 rounded-t-3xl flex flex-col justify-between items-center shadow-xl'>
      <CommentsHeader />
      <Comment />
      <CommentSendMessage />
    </div>
  )
}

export default CommentsBox
