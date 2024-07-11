
import Chat from './components/Chat/Chat.jsx'
import List from './components/List/List.jsx'
import Detail from './components/Detail/Detail.jsx'

import { IconContext } from "react-icons";

const App = () => {
  return (
    <IconContext.Provider value={{ color: "white", className: "icon regular-icon"}}>
      <div className='container'>
        <List></List>
        <Chat></Chat>
        <Detail></Detail>
      </div>
    </IconContext.Provider>
    
  )
}

export default App