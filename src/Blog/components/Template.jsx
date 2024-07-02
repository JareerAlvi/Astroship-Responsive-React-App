import React from 'react'

const Template = (props) => {
  return (
<section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                  <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img class="object-cover object-center rounded" alt="hero" src={props.img}/>
                  </div>
                  <div class="lg:flex-grow md:w-1/2 lg:pl-10 md:pl-4 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 class="font-semibold text-xl text-blue-500">{props.title}
                      
                    </h1>
                    <p class="title-font sm:text-2xl text-xl mb-4 font-medium text-gray-900">{props.exp}</p>
                    <div class="flex justify-center">
                     <div class="text-gray-400 font-semibold text-xl">{props.date}</div>
                    </div>
                  </div>
                </div>
              </section>
  )
}

export default Template
