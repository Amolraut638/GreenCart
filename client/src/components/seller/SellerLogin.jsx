import React, { useEffect, useState } from 'react'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast';

const SellerLogin = () => {
    
    const { isSeller, setIsSeller, navigate, axios} = useAppContext();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //on this function user can login on seller dashboard    
    const onSubmitHandler = async (event) => {
        //logic to handle login form 
        try {
            event.preventDefault();
            const { data } = await axios.post('/api/seller/login', { email, password } ) //through this login api we get login data
            if (data.success) {
                setIsSeller(true);
                navigate('/seller');
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(data.message)
        }
    }
    //we save the seller dashboard credentials in env variables in our backend
    
    useEffect(()=>{
        if (isSeller) {
            navigate("/seller")
        }
    },[isSeller])



  return !isSeller && (
        <form onSubmit={onSubmitHandler} className='min-h-screen flex items-center text-sm text-gray-600'>
            <div className='flex flex-col gap-5 m-auto items-start p-8 py-12 min-w-80 sm:min-w-88 rounded-lg shadow-xl border border-gray-200'>
                <p className='text-2xl font-medium m-auto'><span className='text-primary'>Seller</span>Login</p>
                
                <div className='w-full'>
                    <p>Email</p>
                    <input onChange={(e)=>setEmail(e.target.value)} value={email}
                    className='border border-gray-200 rounded w-full p-2 mt-1 outline-primary required' type="email" placeholder='Enter your email ' />
                </div>
                <div className='w-full'>
                    <p>Password</p>
                    <input onChange={(e)=>setPassword(e.target.value)} value={password}
                    className='border border-gray-200 rounded w-full p-2 mt-1 outline-primary required' type="password" placeholder='Enter your password' />
                </div>
                
                <button className='bg-primary text-white w-full py-2 rounded-md cursor-pointer'>Login</button>
            </div>


        </form>
  )
}

export default SellerLogin