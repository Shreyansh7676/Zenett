import React from 'react'
// import AOS from "aos"
// import "aos/dist/aos.css"

import './videos.css'


export function CardTwo() {
    //   useEffect(()=>{
    //     AOS.init({duration:1200})
    //   })
    return (
        <>
            <div className="relative isolate z-0 bg-orange-200 px-6 py-7 lg:px-8">
                <div className="relative mx-auto max-w-5xl py-16">
                    <div className="text-center flex flex-col gap-4" data-aos="fade-up">
                        <p className="font-bold text-4xl text-cyan-950">Long Video Projects</p>
                        <div className="grid gap-5 gap-y-10 py-6 md:grid-cols-2 lg:grid-cols-2 rounded-lg">
                            <div className="rounded-lg flex justify-center video-responsive" >

                                {/* <img src={post.photo} className="aspect-video w-full rounded-md border border-amber-800 border-4" alt="" /> */}
                                <iframe width="853" height="480" src="https://www.youtube.com/embed/bZ9axWLoXA0" title="Comp 1 1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                            <div className="rounded-lg flex justify-center video-responsive" >

                                {/* <img src={post.photo} className="aspect-video w-full rounded-md border border-amber-800 border-4" alt="" /> */}
                                <iframe width="853" height="480" src="https://www.youtube.com/embed/6wZLjLUSRjY" title="final" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>


                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default CardTwo;