// src/components/Login.tsx
import React, { useState } from 'react';
import { FacebookIcon, GoogleIcon, SingupImage } from '../assets/icons';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { Link } from 'react-router-dom';

const Signup: React.FC = () => {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        try{
            await signInWithEmailAndPassword(auth, email, password)
            window.location.href = '/dashboard'
        } catch(error){
            console.log(error)
        }
    }
    return (
        <>
            <div className='flex items-center justify-center h-[calc(100vh-88px)]'>
                {/* Image */}
                <div className='w-1/3'>
                    <SingupImage className='h-48'/>
                </div>
                {/* Form */}
                <form onSubmit={handleSubmit}>
                    <div className='flex items-center flex-col gap-4'>
                        <h2 className='text-3xl w-96 text-center font-semibold'>The best way to learn math and computer science.</h2>
                        <div className='flex items-center justify-center gap-4'>
                            <button className="w-60 h-16 flex items-center justify-center rounded-full bg-white text-white border-2 border-b-4 border-gray-200">
                                <GoogleIcon className='h-6'/>
                            </button>
                            <button className="w-60 h-16 flex items-center justify-center rounded-full bg-white text-white border-2 border-b-4 border-gray-200">
                                <FacebookIcon className='h-6'/>
                            </button>
                        </div>
                        <div className='flex items-center justify-between'>
                            <div className='bg-gray-200 h-0.5 w-48'></div>
                            <span className='text-gray-400 text-xs'>OR</span>
                            <div className='bg-gray-200 h-0.5 w-48'></div>
                        </div>
                        <input onChange={(e) => setEmail(e.target.value)} value={email} type='email' placeholder='Email' className="w-full h-12 p-4 rounded-lg border-2 border-slate-200 focus:border-slate-800"/>
                        <input onChange={(e) => setPassword(e.target.value)} value={password} type='password' placeholder='Password' className="w-full h-12 p-4 rounded-lg border-2 border-slate-200 focus:border-slate-800"/>
                        <button type='submit' className="w-full h-16 flex items-center justify-center rounded-full bg-slate-800 text-white border-2 border-b-4 border-black">
                            Login      
                        </button>
                        <div className='flex items-centerb gap-2'>
                            <span className='text-gray-500'>New User?</span>
                            <Link to='/signup' className='underline decoration-[#456DFF] hover:text-[#456DFF]'>Sign up</Link>
                        </div>
                    </div>
                </form>
            </div>
        </>
  );
};

export default Signup;
