import { useEffect, useState } from "react";

import "./App.css";
import usefetch from "./usefetch";
import Header from "./Header";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { add, rem } from "./redux/cartslice";
import { useDispatch, useSelector } from "react-redux";

import Slider from "./Slider";

function App() {
  const [data, setdata] = useState([]);

  const dispatch = useDispatch();

  const items = useSelector((state) => state.cartreducer);

  const res = usefetch("https://zartek-task.vercel.app/api/resto-cafe");

  useEffect(() => {
    if (res) {
      setdata(res.data[0].table_menu_list);
    }
  }, [res]);

  console.log(data);

  return (
    <>
      <Header></Header>
      <Slider data={data}></Slider>

      {/* 
    <div className='w-full flex flex-col p-5 gap-5'>
      {
      

        data.length > 0 ? 
        

          (data[0].category_dishes).map((item,index)=>{

            const eachitemcount = items[item.dish_id] || 0

           
          return (

            <>

            <div className='p-15 grid-cols-3  flex text-lg font-semibold border shadow-lg rounded' key={index}>


              <div className='flex flex-col w-[60%] gap-3'>
<div className='flex items-center gap-2'>
  

  <input type="radio" className='' id='input'   style={{height:'15px',width:'15px'}} />







   <h1 className='text-xl'>{item.dish_name}</h1>
</div>
               
                <p className='text-sm font-semibold text-gray-600'>{item.dish_currency} <span>{item.dish_price}</span></p>
              <p className='text-xs font-semibold text-gray-500'>{item.dish_description}</p>
              <div className=' flex justify-items-start'>{
                item.dish_Availability === true ?



                <>

                <div className='rounded mt-2 py-3 px-6 bg-green-600 flex  items-center gap-10 text-white'>

                 <button><FaPlus className='cursor-pointer' onClick={()=>dispatch(add(item.dish_id))} /></button> 
                  <p>{eachitemcount}</p>
                  <button><FaMinus className='cursor-pointer' onClick={()=>dispatch(rem(item.dish_id))} /></button>



                </div>



                
                
                
                </> : <>
                
                <p className='text-red-500 text-base'>Not Available</p></>
              
              
              
              }</div>
              {

(item.addonCat).length >0  && <p className='text-red-600 text-base'>Customization Available</p> 

}
              </div>
              <div className='flex w-[20%] flex-col '>

                <p className='text-gray-600 text-lg'>{item.dish_calories} <span className='ml-2'>Calories</span></p>


              </div>
              <div className='w-[20%] flex justify-center items-center'>

                <img src={item.dish_image} className='rounded object-cover' style={{height:'200px',width:'300px'}} alt="" />



              </div>



              
               </div>
            
            </>

           

          )
        })
        : <p>Loading...</p>
      
      }

    </div> */}
    </>
  );
}

export default App;
