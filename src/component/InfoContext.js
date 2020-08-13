 import  {createContext, useState} from 'react';
import React from 'react'
 import useForm from './useForm';

const InfoContext = createContext();

export const InfoContextProvider = (props) =>
{
const [values , setValues] = useState({});
return(
<InfoContext.Provider value={{values , setValues}}>
    {props.children}
</InfoContext.Provider>
)
}
export default InfoContext;