
import Chat from './components/Chat/Chat.jsx'
import List from './components/List/List.jsx'
import Detail from './components/Detail/Detail.jsx'


const App = () => {
  return (
    <div className='container'>
      <List></List>
      <Chat></Chat>
      <Detail></Detail>
    </div>
  )
}

export default App