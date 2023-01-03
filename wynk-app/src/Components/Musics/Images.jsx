import React, { useState } from 'react'
import {data} from './music'

function Images() {


    const [data1]=useState(data);
   // setData(data);

    
  return (
    <>{data1?.map((x)=>(<div className="image7"><img src={x.img} alt={x.title}/></div>))}</>

  )
}

export default Images