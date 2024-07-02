import React from 'react'

const Card = (props) => {
  return (
   
<div class="grid grid-rows-2 ">
    <img src={props.pic} alt="" height="" width="" class="transition-transform duration-300 transform hover:scale-105 cursor-pointer hover:shadow-xl rounded-lg"/>
    <div>
        <div class="mt-2 flex justify-center text-xl font-normal text-gray-500">{props.name}</div>
        <span></span>
        <div class="flex justify-center text-lg font-semibold text-gray-400">{props.role}</div>
    </div>
   
</div>
  )
}

export default Card
