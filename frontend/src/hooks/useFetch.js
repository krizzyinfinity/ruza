
import React, { useEffect, useState } from "react";
import axios from "axios"
const useFetch = (url) => {

    const [data, setData] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
useEffect(()=> {
const fetchData = async ()=> {
setLoading(true);
try {
    const response = await axios.get(url);
    setData(response.data);

} catch (error) {
    setError(error)
   
    
}
setLoading(false)
}
fetchData()
}, [url]);


const reFetch = async (url)=> {
    setLoading(true);
    try {
        const response = await axios.get(url);
        setData(response.data);
    
    } catch (error) {
        setError(error)
       
        
    }
    setLoading(false)
    }


return  { data, loading, error, reFetch};
}

export default useFetch;