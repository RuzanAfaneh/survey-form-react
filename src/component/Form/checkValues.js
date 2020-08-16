import React from 'react'
import { useContext } from 'react';

import InfoContext from '../InfoContext'

const CheckValues=()=>{
const {values} = useContext(InfoContext);

var empty =false;

    for(const i in values)
    {
      if(values[i]==="") {
        empty =true
        break;
      }
      return (
        empty
      )
}
}
export default CheckValues;