import React from 'react'
import iconSuccess from '../../assets/images/icon-success.svg'
import '../../index.css'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

const SuccessActive = () => {
  const location = useLocation();
  const emailUser = location.state && location.state.email;
  return (
    <div className='h-screen w-full flex justify-center items-center m-auto bg-[#36384d]'>
      <div className='flex flex-col justify-center items-center border-2 bg-[#fff] rounded-lg'>
        <div className='w-96 h-1/2 p-8'>
          <div>
            <img src={iconSuccess} alt="" className='p-2 ml-2 mb-4 w-16 h-16' />
          </div>
          <div>
            <h2 className='text-5xl ml-4 font-bold w-auto text-[#252a3e]'>Thanks for subscribing!</h2>
          </div>
          <div className='font-bold ml-4 text-sm my-4 text-[#616161]'>
            <p>A confirmation email has been sent to <span className='text-sm text-[#000000]'>{emailUser}</span>. Please open it and click the button inside to confirm your subscription.</p>
          </div>
          <div className='flex justify-center items-center'>
            <Link to={'/'}>
              <button className='buttonSuccess'>Dismiss message</button>
            </Link>

          </div>
        </div>


      </div>
    </div>
  )
}

export default SuccessActive