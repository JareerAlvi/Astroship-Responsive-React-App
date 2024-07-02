import React from 'react'
import Top from '../components/Top'
import Card from './components/Card'
const About = () => {
  return (
    <div>
      <Top title='About' note='We are a small passionate team.'/>

      <section class="mt-10 mx-36">

    <h1 class="text-3xl font-semibold">Empowring the world with astro</h1>
    <p class="mt-2 text-xl font-semibold text-gray-400">
        We're a multi-cultural team from around the world! We come from diverse backgrounds, bringing different personalities, experiences and skills to the job. This is what makes our team so special.
    </p>
    <div class="flex flex-wrap justify-center mt-16 gap-12 ">

<Card name='Janette Lynch' role='Senior Director' pic='src\About\team1.jpg'/>
<Card name='Marcell Ziemann' role='Principal Strategist' pic='src\About\components\team2.jpg'/>
<Card name='Robert Palmer' role='Marketing Engineer' pic='src\About\components\team3.jpg'/>



        </div>
    
    </section>
    </div>
  )
}

export default About
