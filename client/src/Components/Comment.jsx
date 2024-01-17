import React from 'react'
import './Comment.css'

export default function Comment() {
  return (
    <div className="comment">
    <div className="user-banner">
        <div className="user">
            <div className="avatar">
                <img src="https://randomuser.me/api/portraits/men/86.jpg" />
                <span className="stat grey"></span>
            </div>
            <h5 className="userName">Floyd Miles</h5>
        </div>
        <button className="btn dropdown"><i className="ri-more-line"></i></button>
    </div>
    <div className="content">
        <p>Actually, now that I try out the links on my message, above, none of them take me to the secure site. Only my shortcut on my desktop, which I created years ago.</p>
    </div>
    <div className="footer">
        <button className="btn"><i className="ri-emotion-line"></i></button>
        <div className="reactions">
            <button className="btn react"><img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/325/thumbs-up_1f44d.png" alt="" />4</button>
            <button className="btn react"><img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/325/angry-face-with-horns_1f47f.png" alt="" />1</button>
        </div>
        <div className="divider"></div>
        <a href="#">Reply</a>
        <div className="divider"></div>
        <span className="is-mute">6 hour</span>
    </div>
</div>
  )
}
