import React from 'react'

export default function page() {
  return (
    <div className='text-center p-9 m-9 pt-3 mx-auto'>
      <div className='p-7'>
        <h1 className='text-4xl text-center p-9 bg-red-800'>About Page</h1>
        <h1 className='text-3xl font p-9'>This page is under development. <br />
          If wants to be notified for the updates we made. <br /> Make sure to follow our Instagram page by clicking the button- <br />
        </h1>
      </div>

      <div className='p-8'>
        <button className='mx-auto text-center relative group text-xl text-black font-bold border-2 border-blue-900 border-solid p-3 rounded-md'><a href="https://www.instagram.com/prnc_wr?igsh=MWVsNnVzd2VyZ2s1ZQ==" className='bg-black'>prnc_wr</a></button>
      </div>
    </div>
  )
}
