 import  {createContext, useState} from 'react';
import React from 'react'

const InfoContext = createContext();

export const InfoContextProvider = (props) =>
{
const [values , setValues] = useState({
    firstName :'',
    lastName :'',
    email:'',
    country:'',
    gender:'',
    terms:'',
    counter:0,
    age:'0',
    satisfaction:''

});
return(
<InfoContext.Provider value={{values , setValues}}>
    {props.children}
</InfoContext.Provider>
)
}
export default InfoContext;