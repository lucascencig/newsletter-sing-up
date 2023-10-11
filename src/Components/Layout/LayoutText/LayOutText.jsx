import React from 'react'
import EmailSection from '../../EmailSection/EmailSection'

import '../../../index.css'

const LayOutText = () => {
  return (
    <div className='font-roboto w-full pt-8 m-auto'>
      <div className='p-4 m-auto'>
        <h1 className='text-5xl w-full sm:w-96 font-bold text-[#252a3e]'>Stay updated!</h1>
      </div>

      <div className='font-bold p-4 text-[#8d8c92]'>
        <p className='w-full sm:w-96'>Join 60,000+ product managers receiving monthly updates on:</p>
      </div>

      <div className='p-4 font-bold text-sm sm:text-base text-[#8d8c92]'>
        <ul className='flex flex-col gap-3 w-full sm:w-96 m-auto'>
          <li className='flex items-center'><svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><g fill="none"><circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" /><path stroke="#FFF" strokeWidth="2" d="M6 11.381 8.735 14 15 8" /></g></svg> <span className='mx-2 text-sm w-96'>Product discovery and building what matters</span></li>
          <li className='flex items-center'><svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><g fill="none"><circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" /><path stroke="#FFF" strokeWidth="2" d="M6 11.381 8.735 14 15 8" /></g></svg> <span className='mx-2 text-sm w-96'>Measuring to ensure updates are a success</span></li>
          <li className='flex items-center'><svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><g fill="none"><circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" /><path stroke="#FFF" strokeWidth="2" d="M6 11.381 8.735 14 15 8" /></g></svg> <span className='mx-2 text-sm w-96'>And much more!</span></li>
        </ul>
      </div>

      <div>
        <EmailSection />
      </div>
    </div>
  )
}

export default LayOutText