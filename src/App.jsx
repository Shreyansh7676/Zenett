'use client'

import { useNavigate } from 'react-router-dom'
import AOS from "aos"
import "aos/dist/aos.css"
import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import About from './About'
import Design from './Design'
import Shorts from './Shorts'
import Long from './Long'
import Plans from './Plans'
import { useEffect } from 'react';


const navigation = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Pricing', href: '#plans' },
]

export default function Example() {
  useEffect(()=>{
    AOS.init({duration:1200})
  })
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const handleProceed = () => {
    navigate('/plans');
  };

  return (
    <div className="bg-cyan-950">
      <header className="absolute inset-x-0 top-0 z-50 bg-black backdrop-blur-sm">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <h1 className="text-white font-semibold text-2xl hover:text-amber-100">Zenett</h1>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-200 hover:text-amber-200">
                {item.name}
              </a>
            ))}
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Zenett</span>
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-200"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-200 hover:bg-gray-400"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 py-4 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center" data-aos="fade-up">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-amber-200 sm:text-6xl">
              Zenett
            </h1>
            <p className="mt-6 text-lg leading-8 text-amber-100">
              Helping Personal Brand and Businesses to increase their AVD 10x faster
              through organic content!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">

              <a class="bg-amber-200 text-cyan-950 border border-cyan-950 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group" href='#plans'>
                <span class="bg-amber-400 shadow-amber-600 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                Contact Me!
              </a>

            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >

        </div>
      </div>

      {/* <div className="relative isolate px-6 py-10 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl">
              About Myself
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Helping Personal Brand and Businesses to increase their AVD 10x faster
              through organic content!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">

              <button
                class="overflow-hidden relative w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer z-10 group"
              >
                Hire Me!
                <span
                  class="absolute w-36 h-32 -top-8 -left-2 bg-sky-200 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-right">
                </span>
                <span
                  class="absolute w-36 h-32 -top-8 -left-2 bg-sky-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-right"
                ></span>
                <span
                  class="absolute w-36 h-32 -top-8 -left-2 bg-sky-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-right"
                ></span>
                <span
                  class="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10"
                >Let's Go!</span>

              </button>

            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >

        </div>
      </div> */}
      <div id='about'>
        <About />
      </div>
      <div id='projects'>
        <Design />
        <Shorts />
        <Long />
      </div>

      <div id="plans">
        <Plans />
      </div>

    </div>
  )
}
