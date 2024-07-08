import './ChatList.scss'

const ChatList = () => {
  return (
    <div>
      <div className="search">
        <div className="search-bar">
          <img className='search-icon' src="../public/search.png" alt="" />
          <input type="text" placeholder='Search'/>
        </div>
        <div className="add-user-button">
          <img className="add-user-icon" src="../public/plus.png" alt="" />
        </div>
      </div>
      <div className="chat-list">
        <div className="chat-item">
          <div className="chat-image">
            <img src="./avatar.png" alt="" />
          </div>
          <div className="chat-info">
            <span className="chat-name">User 1</span>
            <p className="chat-last-message">Last message</p>
          </div>
        </div>
        <div className="chat-item">
          <div className="chat-image">
            <img src="../public/avatar.png" alt="" />
          </div>
          <div className="chat-info">
            <div className="chat-name">User 2</div>
            <div className="chat-last-message">Last message</div>
          </div>
        </div>
        <div className="chat-item">
          <div className="chat-image">
            <img src="../public/avatar.png" alt="" />
          </div>
          <div className="chat-info">
            <div className="chat-name">User 2</div>
            <div className="chat-last-message">Last message</div>
          </div>
        </div>
        <div className="chat-item">
          <div className="chat-image">
            <img src="../public/avatar.png" alt="" />
          </div>
          <div className="chat-info">
            <div className="chat-name">User 2</div>
            <div className="chat-last-message">Last message</div>
          </div>
        </div>
        <div className="chat-item">
          <div className="chat-image">
            <img src="../public/avatar.png" alt="" />
          </div>
          <div className="chat-info">
            <div className="chat-name">User 2</div>
            <div className="chat-last-message">Last message</div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default ChatList