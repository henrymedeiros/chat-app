import ChatList from './ChatList/ChatList'
import './List.scss'
import UserInfo from './UserInfo/UserInfo'

const List = () => {
  return (
    <div className='list'>
      <UserInfo></UserInfo>
      <ChatList></ChatList>
    </div>
    
  )
}

export default List