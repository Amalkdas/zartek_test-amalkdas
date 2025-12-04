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

     
    </>
  );
}

export default App;
