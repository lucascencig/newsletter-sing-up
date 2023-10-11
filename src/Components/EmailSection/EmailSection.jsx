import React, { useState } from 'react';
import '../../index.css';
import SuccessActive from '../SuccessActive/SuccessActive';
import { useNavigate } from 'react-router-dom';


const EmailSection = ({ emailUser }) => {
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
    <div className='w-full justify-center  m-auto sm:w-96 sm:justify-center'>
      <form className='flex flex-col justify-center  m-auto sm:w-96'>
        {/* <label className='font-bold py-2'>Email address </label> */}


        <div className='flex flex-col text-center'>
          <span className='font-bold '>Email address </span>



          <div className='flex flex-col m-auto'>
            <input
              className='border-2 p-3 font-bold rounded-lg w-96'
              type="email"
              placeholder='email@company.com'
              value={email}
              emailUser={emailUser}
              id='inputEmail'
              onChange={(e) => setEmail(e.target.value)}
            />
            {error &&
              <div className='text-center pt-2  '>

                <label className="text-[#d68783] font-bold pt-2 ">{error}</label>
              </div>
            }
            <button
              onClick={handleSubmit}
              className='font-bold text-[#fff] mt-4 w-96 p-3 border-2 rounded-lg bg-[#232742] hover:bg-[#3c4474] transition duration-100'
            >
              Subscribe to monthly newsletter
            </button>
          </div>
        </div>
      </form >
    </div >
  );
};

export default EmailSection;
