import React from 'react'

const Top = (props) => {
  return (
    <div>
              <h1 class="flex justify-center mt-20 text-5xl font-bold">{props.title}</h1>
              <p class=" flex justify-center text-gray-400 font-semibold mt-4">{props.note}</p>
    </div>
  )
}

export default Top
