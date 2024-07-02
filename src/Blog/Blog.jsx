import React from 'react'
import Top from '../components/Top'
import Template from './components/Template'
const items = [
    {
        id: 1,
        title: 'Courses',
        exp: 'Introduction to the Essential Data Structures & Algorithms',
        date: 'Marcell Ziemann • Wed Nov 09 2022',
        img: 'src/Blog/media/blog1.jpg'
    },
    {
        id: 2,
        title: 'Tutorials',
        exp: 'The Complete Guide to Full Stack Web Development',
        date: 'Janette Lynch • Tue Nov 08 2022',
        img: 'src/Blog/media/blog2.jpg'
    },
    {
        id: 3,
        title: 'Tutorials',
        exp: 'How to become a Frontend Master',
        date: 'Connor Lopez • Mon Nov 07 2022',
        img: 'src/Blog/media/blog3.jpg'
    },
    {
        id: 4,
        title: 'Technology',
        exp: 'Typography Example Post',
        date: 'Charles North • Sat Nov 05 2022',
        img: 'src/Blog/media/blog4.jpg'
    }
];
const Blog = () => {
    
    
  return (
    <div>
      <Top title='Blog' note='We write about building startups and thoughts going on our mind.'/>
      <section class="mt-10 mx-10">

      {items.map((items, index) => (
           <Template key={index} title={items.title} exp={items.exp} date={items.date} img={items.img}/>
          ))}





{/* <Template title='' exp='' date=''/>
<Template title='' exp='' date=''/>
<Template title='' exp='' date=''/>
<Template title='' exp='' date=''/>         */}
        
        
        </section>

    </div>
  )
}

export default Blog
