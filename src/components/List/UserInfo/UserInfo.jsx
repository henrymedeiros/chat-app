import { BsPencilSquare, BsThreeDots } from 'react-icons/bs'
import './UserInfo.scss'

const UserInfo = () => {
  return (
    <div className='user-info'>
        <div className="profile">
          <img className='profile-picture' src="../public/avatar.png" alt="" />
          <h3>A cool guy</h3>
        </div>

        <div className="icons">
          <BsThreeDots  style={{ cursor: 'pointer' }}/>
          <BsPencilSquare   style={{ cursor: 'pointer' }}/>
        </div>
    </div>
  )
}

export default UserInfo