import './UserInfo.scss'

const UserInfo = () => {
  return (
    <div className='user-info'>
        <div className="profile">
          <img className='profile-picture' src="../public/avatar.png" alt="" />
          <h3>A cool guy</h3>
        </div>

        <div className="icons">
          <img src="../public/more.png" alt="See more info" />
          <img src="../public/edit.png" alt="See more info" />
        </div>
    </div>
  )
}

export default UserInfo