import CommentsBox from './components/CommentsBox'

interface Props {
  user: any
  setUser: React.Dispatch<React.SetStateAction<any>>
}

const App = ({ user, setUser }: Props) => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <CommentsBox />
    </div>
  )
}

export default App
