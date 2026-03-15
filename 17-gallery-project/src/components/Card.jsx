import React from 'react'

const Card = (props) => {
  return (
    <div>
     

<a href={props.elem.url} target='_blank'>
<div>
  
  <img className='h-50 w-60 object-cover rounded-xl hover:opacity-70 hover:scale-105 active:scale-95 ' key={props.key} src={props.elem.download_url} alt="img"  />
  <p className='font-bold '>{props.elem.author}</p>
 </div>
 </a>

    </div>
  )
}

export default Card
