import CommentsBox from './components/CommentsBox'
import WarrningMessage from './components/WarrningMessage'

interface Props {
  user: any
  setUser: React.Dispatch<React.SetStateAction<any>>
}

const App = ({ user, setUser }: Props) => {
  return (
    <div className='flex justify-center items-center h-screen'>
      {user ? <CommentsBox /> : <WarrningMessage />}
    </div>
  )
}

export default App
