import { useEffect, useState } from "react"


const usefetch = (url)=>{
    const [data,setdata] = useState()


    useEffect(()=>{
        fetch(url).then((res)=>{
            res.json().then((result)=>{
                setdata(result)
            })
        }).catch((err)=>{
            return err
        })
    },[url])
    return data
}

export default usefetch

