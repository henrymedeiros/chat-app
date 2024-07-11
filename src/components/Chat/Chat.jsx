import { BsCameraVideoFill, BsFillTelephoneFill, BsThreeDots } from "react-icons/bs";

import './Chat.scss'

const Chat = () => {
  return (
    <div className='chat'>
      <div className="top-section">
        <div className="contact-info">
          <div className="contact-image">
            <img src="./avatar.png" alt="" />
          </div>
          <div className="text">
            <span className="contact-name">User 1</span>
            <p className="contact-status">Online</p>
          </div>
        </div>
        <div className="icons">
          <BsFillTelephoneFill />
          <BsCameraVideoFill />
          <BsThreeDots />
        </div>
      </div>
    </div>
  )
}

export default Chat