import React from 'react'
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react';
import Img1 from './images/elevated.jpg'
import Img2 from './images/FCB VS_PSG2.png'
import Img3 from './images/fifa.jpg'
import Img4 from './images/rm vs mci.png'
import Img5 from './images/spiderman tb1.jpg'
import Img6 from './images/Untitled-2.png'
const posts = [
  {
    photo: Img1
  },
  {
    photo: Img2
  },
  {
    photo: Img3
  },
  {
    photo: Img4
  },
  {
    photo: Img5
  },
  {
    photo: Img6
  },
]

export function CardTwo() {
  useEffect(()=>{
    AOS.init({duration:1200})
  })
  return (
    <>
      <div className="relative isolate z-0 bg-amber-200 px-6 py-7 lg:px-8">
        <div className="relative mx-auto max-w-5xl py-16">
          <div className="text-center flex flex-col gap-4" data-aos="fade-up">
          <p className="font-bold text-4xl text-orange-900">Designing Projects</p>
          <p className="font-semibold text-xl text-orange-900">"Welcome to my design portfolio! Here, you'll find a collection of projects that showcase my creativity, technical skills, and passion for designing intuitive and visually appealing user experiences." </p>
          <p className="text-large text-orange-900">Crafted with the Adobe Photoshop</p>
            <div className="grid gap-6 gap-y-10 py-6 md:grid-cols-2 lg:grid-cols-3 rounded-lg">
                
          {posts.map((post) => (
            <div className="border bg-white rounded-lg" >
            
              <img src={post.photo} className="aspect-video w-full rounded-md border border-amber-800 border-4" alt="" />
            </div>
          ))}
        </div>
        
          </div>
        </div>
      </div>
    </>
  )
}
export default CardTwo;