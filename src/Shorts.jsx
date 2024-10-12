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
            <div className="relative isolate z-0 bg-orange-500 px-6 py-7 lg:px-8">
                <div className="relative mx-auto max-w-5xl py-16">
                    <div className="text-center flex flex-col gap-4" data-aos="fade-up">
                        <p className="font-bold text-4xl text-amber-200">Short Video Projects</p>
                        <p className="font-semibold text-xl text-amber-200">"Welcome to my video editing portfolio! Explore a range of projects where I blend storytelling, precision editing, and visual effects to create captivating and dynamic video content."</p>
                        <p className="text-large text-amber-200">Crafted in Adobe After Effects & Adobe Premiere Pro</p>
                        <div className="grid gap-5 gap-y-10 py-6 md:grid-cols-2 lg:grid-cols-2 rounded-lg">
                            <div className="rounded-lg flex justify-center video-responsive" >

                                {/* <img src={post.photo} className="aspect-video w-full rounded-md border border-amber-800 border-4" alt="" /> */}
                                <iframe width="337" height="599" src="https://www.youtube.com/embed/ipauywMWgLI" title="Sequence 01 1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                            <div className="rounded-lg flex justify-center video-responsive" >

                                {/* <img src={post.photo} className="aspect-video w-full rounded-md border border-amber-800 border-4" alt="" /> */}
                                <iframe width="337" height="599" src="https://www.youtube.com/embed/5pf-u7byAiI" title="Sample 2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>


                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default CardTwo;