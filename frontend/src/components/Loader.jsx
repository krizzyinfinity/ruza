import React, { useState } from 'react'
import RingLoader from "react-spinners/RingLoader";
const Loader = () => {
    
      let [loading, setLoading] = useState(true);
      let [color, setColor] = useState("#af9a7d");      
  return (
    <div style={{display:"flex", alignItems:"center", justifyContent:"center", height:"100vh"}} >
      
      <RingLoader
        color={color}
        loading={loading}
        
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}

export default Loader