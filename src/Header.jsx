import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { add, rem } from './redux/cartslice';


function Header() {

     const storedata = useSelector((state)=>state.cartreducer)

     const totalcartcount = Object.values(storedata).reduce((total,count)=>{
        return total + count
     },0)

  return (
   <>

  <div className='flex p-10 items-center    justify-between '>

    <h1 className='text-2xl font-semibold text-gray-600'>UNI Resto cafe</h1>
    <div className='flex justify-center gap-10 items-center'>

    <h1 className='text-xl font-semibold text-gray-600'>My Orders</h1>
    <div className='flex items-center'> <FaShoppingCart className='text-3xl text-gray-600' />
    <div className='rounded-full bg-red-600 flex justify-center items-center absolute right-4 top-6' style={{height:'30px',width:'30px'}}>
        <p className='text-white'>{totalcartcount}</p></div></div>
   
    </div>


  </div>
   
   </>
  )
}

export default Header
