import { async } from '@firebase/util'
import React ,{useRef,useState} from 'react'
import {Link} from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { auth } from '../contexts/AuthContext'

import {
    createUserWithEmailAndPassword
}
from 'firebase/auth'

export default function SignUp() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    function handleSubmit(e) {
        
        e.preventDefault()
    
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
          return setError("Passwords do not match")
        }
        signup(emailRef.current.value,passwordConfirmRef.current.value)
        setLoading(false)
    }

    


    return (
        <div className=' shadow-lg rounded overflow-hidden '>
            <div className='text-center'>Sign Up</div>
            <form className='p-10' onSubmit={handleSubmit }>
                <label className="block">
                    <span className="block text-sm font-medium text-slate-700">Username</span>
                    <input type="text"  ref={emailRef} className="mt-1 block min-w-[300px] px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                    disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                    invalid:border-pink-500 invalid:text-pink-600
                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                    "/>
                </label>

                <label className="block mt-4">
                    <span className="block text-sm font-medium text-slate-700">Password</span>
                    <input type="password"  ref={passwordRef} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                    disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                    invalid:border-pink-500 invalid:text-pink-600
                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                    "/>
                </label>

                <label className="block mt-4">
                    <span className="block text-sm font-medium text-slate-700">Confirm Password</span>
                    <input type="password"  ref={passwordConfirmRef} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                    disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                    invalid:border-pink-500 invalid:text-pink-600
                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                    "/>
                </label>
                <button type='submit' className='w-full bg-green-300 hover:bg-green-500 font-semibold text-white mt-10 p-2 rounded'>Submit</button>
            </form>
            <div className="w-100 text-center mb-4  ">
                Already have an account? <span className='text-red-400 font-semibold'><Link to="/login">Log In</Link></span>
            </div>
        </div>
        
    )
}
