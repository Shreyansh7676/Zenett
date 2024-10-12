import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react';
export default function Example() {
    useEffect(()=>{
        AOS.init({duration:1200})
      })
    return (
        <div className="bg-red-600 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center" data-aos="fade-up">
                    <p className="mt-2 text-5xl font-bold tracking-tight text-amber-200 sm:text-4xl">
                        Prices and Plans
                    </p>
                    <p className="mt-6 text-xl leading-8 text-yellow-200">
                        The <b>Prices</b> may differ according to your needs and type of work.
                    </p>
                    <p className="text-lg leading-8 text-yellow-200">
                        Contact on my below social media handles and I would reach out to you soon.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">

                        <a class="bg-amber-300 text-red-600 border border-red-700 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group" href='https://www.instagram.com/zenett_18/' target="_blank">
                            <span class="bg-red-700 shadow-red-600 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                            Contact Me!
                        </a>

                    </div>
                </div>
                {/* <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                        <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div> */}
            </div>
        </div>
    )
}
