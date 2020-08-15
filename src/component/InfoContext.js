 import  {createContext, useState} from 'react';
import React from 'react'
 import useForm from './useForm';

const InfoContext = createContext();

export const InfoContextProvider = (props) =>
{
const [values , setValues] = useState({});
const [index , setIndex] = useState(0)
return(
<InfoContext.Provider value={{values , setValues}} i={{index,setIndex}}>
    {props.children}
</InfoContext.Provider>
)
}
export default InfoContext;