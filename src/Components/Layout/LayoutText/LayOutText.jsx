
import React, { useState } from 'react';

// import SuccessActive from '../SuccessActive/SuccessActive';
import { useNavigate } from 'react-router-dom';

import '../../../index.css'

const LayOutText = () => {

  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const emailRx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const handleSubmit = (e) => {
    e.preventDefault()
    if (emailRx.test(email)) {
      setSuccess(true);
      setError('');
      navigate('/success', { state: { email } });

    } else {
      setSuccess(true);
      setError('Valid email required');
      const errorEmail = document.getElementById('inputEmail')
      errorEmail.style.background = '#ffe8e6'
      errorEmail.style.borderColor = '#d68783'
      errorEmail.style.borderWidth = '2px'
      errorEmail.style.color = '#d68783'
      errorEmail.style.display = 'block'


    }
  };

  return (
    <div className='font-roboto w-full pt-8 m-auto'>
      <div className='p-4 m-auto'>
        <h1 className='text-5xl w-full sm:w-96 font-bold text-[#252a3e]'>Stay updated!</h1>
      </div>

      <div className='font-bold m-auto p-4 text-[#8d8c92]'>
        <p className='w-10/12 sm:w-96'>Join 60,000+ product managers receiving monthly updates on:</p>
      </div>

      <div className='p-4 font-bold text-sm sm:text-base text-[#8d8c92]'>
        <ul className='flex flex-col gap-3 w-full sm:w-96 m-auto'>
          <li className='flex items-center'><svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><g fill="none"><circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" /><path stroke="#FFF" strokeWidth="2" d="M6 11.381 8.735 14 15 8" /></g></svg> <span className='mx-2 text-sm w-96'>Product discovery and building what matters</span></li>
          <li className='flex items-center'><svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><g fill="none"><circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" /><path stroke="#FFF" strokeWidth="2" d="M6 11.381 8.735 14 15 8" /></g></svg> <span className='mx-2 text-sm w-96'>Measuring to ensure updates are a success</span></li>
          <li className='flex items-center'><svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><g fill="none"><circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" /><path stroke="#FFF" strokeWidth="2" d="M6 11.381 8.735 14 15 8" /></g></svg> <span className='mx-2 text-sm w-96'>And much more!</span></li>
        </ul>
      </div>
      <div className='w-full justify-center  m-auto sm:w-96 sm:justify-center'>
        <form className='flex flex-col justify-center  m-auto sm:w-96'>
          {/* <label className='font-bold py-2'>Email address </label> */}


          <div className='flex flex-col text-justify'>

            <div className='flex flex-col p-4'>
              <label className='font-bold flex flex-col'>Email address

                <input
                  className='border-2 p-3 font-bold rounded-lg w-80'
                  type="email"
                  placeholder='email@company.com'
                  value={email}
                  email={email}
                  id='inputEmail'
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              {error &&
                <div className='text-justify pt-2  '>

                  <label className="text-[#d68783] font-bold pt-2 ">{error}</label>
                </div>
              }
              <button
                onClick={handleSubmit}
                className='font-bold text-[#fff] mt-4 w-80 p-3 border-2 rounded-lg bg-[#232742] hover:bg-[#3c4474] transition duration-100'
              >
                Subscribe to monthly newsletter
              </button>
            </div>
          </div>
        </form >
      </div >
    </div>
  )
}

export default LayOutText