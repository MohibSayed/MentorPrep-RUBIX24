import React from 'react'
import 'Comment.css'

export default function Comment() {
  return (
    <div class="comment">
    <div class="user-banner">
        <div class="user">
            <div class="avatar">
                <img src="https://randomuser.me/api/portraits/men/86.jpg" />
                <span class="stat grey"></span>
            </div>
            <h5>Floyd Miles</h5>
        </div>
        <button class="btn dropdown"><i class="ri-more-line"></i></button>
    </div>
    <div class="content">
        <p>Actually, now that I try out the links on my message, above, none of them take me to the secure site. Only my shortcut on my desktop, which I created years ago.</p>
    </div>
    <div class="footer">
        <button class="btn"><i class="ri-emotion-line"></i></button>
        <div class="reactions">
            <button class="btn react"><img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/325/thumbs-up_1f44d.png" alt="" />4</button>
            <button class="btn react"><img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/325/angry-face-with-horns_1f47f.png" alt="" />1</button>
        </div>
        <div class="divider"></div>
        <a href="#">Reply</a>
        <div class="divider"></div>
        <span class="is-mute">6 hour</span>
    </div>
</div>
  )
}
