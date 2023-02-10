import CommentsHeader from './CommentsHeader'
import Comment from './Comment'
import CommentSendMessage from './CommentSendMessage'

const CommentsBox = () => {
  return (
    <div className='h-[800px] w-[400px] bg-gradient-to-b from-gray-100 to-gray-200 rounded-t-3xl flex flex-col  items-center shadow-xl'>
      <CommentsHeader />
      <div className='w-full h-full overflow-y-scroll'>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
      <CommentSendMessage />
    </div>
  )
}

export default CommentsBox
