import { configureStore } from "@reduxjs/toolkit";
import reducerfromcart from './cartslice'





export  const store = configureStore({


    reducer : {

        cartreducer : reducerfromcart




    }

})