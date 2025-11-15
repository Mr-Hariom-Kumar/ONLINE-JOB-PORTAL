import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-900 text-white mt-auto   bottom-0 left-0 right-0 min-w-full z-5 px-12 py-5 max-sm:px-9 '>
      <div className='flex gap-50 justify-between mt-5 max-sm:gap-1 max-sm:flex-col '>
          <div className='font-medium mb-4 max-sm:text-xs max-sm:flex max-sm:gap-2 max-sm:flex-wrap'>
            <p className='mb-2'>Contact:+91 7667411046</p>
            <p className='mb-2'>Email: xyz@gmail.com</p>
            <p className='mb-2'>Linkedin</p>
            <p className='mb-2'>Twitter</p>
        </div>
        <div className='flex-wrap w-[30vw] max-md:w-[90vw] max-sm:w-[80vw] max-sm:text-xs '>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa ullam veniam natus consequuntur dolor nisi cum ab explicabo voluptate illum eligendi praesentium dicta nesciunt, atque magni. Aliquam minima deleniti tenetur.
        </div>
      </div>
      <p className='mt-10  align-middle text-center text-xs' >© 2025 Your Company. All rights reserved.</p>
    </div>
  )
}

export default Footer
