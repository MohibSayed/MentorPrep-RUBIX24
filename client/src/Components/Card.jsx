import React from 'react'
import './Card.css'

export default function Card() {
  return (
    <div class="card">
    <div class="card-image"></div>
    <div class="category"> Illustration </div>
    <div class="heading"> A heading that must span over two lines
        <div class="author"> By <span class="name">Abi</span> 4 days ago</div>
    </div>
</div>
  )
}
