import React, { useState, useRef } from 'react'
import { AiFillLock, AiFillUnlock } from 'react-icons/ai'
import { FiPhone } from 'react-icons/fi'
import { auth, google } from '../fireBase.js'
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth'

const SignIn = () => {

  const [show, setShow] = useState(false)
  const [check, setCheck] = useState(false)
  const [error, setError] = useState(false)
  const signInEmail = useRef();
  const signInPass = useRef();
  const phone = useRef();

  const reset = () => {
    setCheck(false)
    signInEmail.current.value = ''
    signInPass.current.value = ''
  }

  return (
    <div className="flex justify-center items-center h-[80%]">
      <div className="mb-[60px] flex flex-col justify-center items-center rounded-[30px]  h-[600px] w-1/2 bg-whiteSmoke shadow-2xl">

        <div className={`${error == '' ? 'hidden' : "flex justify-center items-center bg-ascent text-[#121820] w-[63%] h-[6%] rounded-md font-black tracking-wider"}`}>
          {error}
        </div>

        <div className="mail text-dark w-[63%]">
          <input type="text" minLength={'12'} className='border-2 border-ascent bg-light text-dark font-black px-3 py-2 my-4 rounded-[30px] w-full' placeholder='ENTER EMAIL HERE' required ref={signInEmail} />
        </div>

        <div className="pass text-dark w-[63%] flex relative">
          <input type={`${show ? 'text' : 'password'}`} minLength={'9'} className='border-2 border-ascent bg-light text-dark font-black px-3 py-2 my-4 rounded-[30px] w-full' placeholder='ENTER PASSWORD HERE' required ref={signInPass} />
          <span className="absolute left-[90%] top-[33%] text-[24px] text-dark" onClick={() => setShow(!show)}>
            {show ? <AiFillLock /> : <AiFillUnlock />}
          </span>
        </div>

        <div className="check flex justify-start w-[63%] items-center">
          <input type="checkbox" className='h-[18px] w-[18px] mx-3' checked={check} />
          <label htmlFor="check" className='text-ascent text-[24px] font-fonty cursor-pointer' onClick={() => setCheck(!check)}>Accept terms and conditions</label>
        </div>

        <div className="flex justify-between items-center w-[36%] space-x-12 mt-3">
          <button className="bg-dark text-light rounded-xl h-[36px] w-[90px] hover:bg-ascent hover:text-dark hover:font-black">SIGN IN</button>
          <button className="bg-dark text-light rounded-xl h-[36px] w-[90px] hover:bg-ascent hover:text-dark hover:font-black"
            onClick={() => reset()}
          >
            RESET
          </button>
        </div>

        <div className="flex justify-center w-[63%] items-center text-[30px] font-black my-2 font-fonty tracking-widest text-dark">OR</div>

        <div className="phone flex justify-center items-center w-[63%] relative">
          <input type="tel" 
            className='border-2 border-ascent bg-light text-dark font-black px-3 py-2 my-4 rounded-[30px] w-full'
            placeholder='VERIFY WITH PHONE'
          />
          <FiPhone className='absolute top-[50%] left-[90%] translate-y-[-50%]'/>
        </div>

        <div className="flex justify-center items-center w-[36%] mt-3" ref={phone}>
          <button className="bg-dark text-light rounded-xl h-[36px] w-[90px] hover:bg-ascent hover:text-dark hover:font-black"
            onClick={() => phoneSignIn()}
          >
            VERIFY
          </button>
        </div>
      </div>
    </div>
  )
}

export default SignIn