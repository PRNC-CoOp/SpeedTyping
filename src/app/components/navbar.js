import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <>
      <div className='flex bg-slate-300 w-full p-4 items-center justify-between'>
        <nav className='flex bg-slate-300 justify-between items-center w-full max-w-7xl mx-auto'>
          <h1 className='font-bold text-3xl text-slate-800 flex'>TY <p className='font-bold text-3xl text-pink-500'>/S</p></h1>
        </nav >

        <div className='flex gap-7'>
          <ul className='w-16 bg-slate-900'>
            <Link href='/'>
              <li className='text-white cursor-pointer hover:text-xl font-bold transition-all hover:bg-white hover:text-slate-900'>
                Home
              </li>
            </Link>
          </ul>
          <ul className='w-16 bg-slate-900'>
            <Link href='/contact'>
              <li className='text-white cursor-pointer hover:text-xl font-bold transition-all hover:bg-white hover:text-slate-900' >
                Contact
              </li>
            </Link>
          </ul>
          <ul className='w-16 bg-slate-900'>
            <Link href='/about'>
              <li className='text-white cursor-pointer hover:text-xl font-bold transition-all hover:bg-white hover:text-slate-900'>
                About
              </li>
            </Link>
          </ul>

        </div>
      </div>
    </>
  )
}
