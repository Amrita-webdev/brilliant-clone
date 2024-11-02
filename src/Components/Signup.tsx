// src/components/Login.tsx
import React, { useState } from 'react';
import { FacebookIcon, GoogleIcon, SingupImage } from '../assets/icons';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {auth, db} from '../firebase'
import { setDoc, doc } from 'firebase/firestore';
import { Link } from 'react-router-dom';

const Signup: React.FC = () => {
    const [firstName, setFirstName] = useState<string>("")
    const [lastName, setLastName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [age, setAge] = useState<number>()
    // const [error, setError] = useState<string>("")

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        try{
            await createUserWithEmailAndPassword(auth, email, password)
            const user = auth.currentUser
            console.log(user, 'registered successfully')
            if(user){
                await setDoc(doc(db, "Users", user.uid), {
                    email: user.email,
                    firstName: firstName,
                    lastName: lastName,
                    age: age
                })
            }
        } catch(e){
            console.log(e)
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
                <h2 className='text-3xl w-96 text-center font-semibold'>Create a free account to discover your personalised learning path</h2>
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
                <div className='flex flex-col gap-2'>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} type='email' placeholder='Email' className="w-full h-12 p-4 rounded-lg border-2 border-slate-200 focus:border-slate-800"/>
                    <input onChange={(e) => setPassword(e.target.value)} value={password} type='password' placeholder='Password' className="w-full h-12 p-4 rounded-lg border-2 border-slate-200 focus:border-slate-800"/>
                    <div className='flex gap-2'>
                        <input onChange={(e) => setFirstName(e.target.value)} value={firstName} type='text' placeholder='First Name' className="w-1/2 h-12 p-4 rounded-lg border-2 border-slate-200 focus:border-slate-800"/>
                        <input onChange={(e) => setLastName(e.target.value)} value={lastName} type='text' placeholder='Last Name' className="w-1/2 h-12 p-4 rounded-lg border-2 border-slate-200 focus:border-slate-800"/>
                    </div>
                    <input onChange={(e) => setAge(parseInt(e.target.value))} value={age} type='number' placeholder='Age' className="w-full h-12 p-4 rounded-lg border-2 border-slate-200 focus:border-slate-800"/>
                </div>
                <button type='submit' className="w-full h-16 flex items-center justify-center rounded-full bg-slate-800 text-white border-2 border-b-4 border-black">
                    Sign up       
                </button>
                <p className='text-xs text-gray-400'>By clicking above, I agree to Brilliant's Terms and Privacy Policy</p>
                <div className='flex items-centerb gap-2'>
                    <span className='text-gray-500'>Existing User?</span>
                    <Link to='/login' className='underline decoration-[#456DFF] hover:text-[#456DFF]'>Log in</Link>
                </div>
            </div>
        </form>
    </div>
    </>
  );
};

export default Signup;
