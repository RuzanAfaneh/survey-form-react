import React from 'react';
import InfoContext from '../InfoContext'
import { useState, useContext } from 'react';


export const BackwardsButton=(props)=>{
    const {index , setIndex} = useContext(InfoContext);
return(
    <div className="button">
    <input type="button" id="back"className="button" value="Backwards" onClick={()=>index<=0 ? 0:setIndex(index-1)} disabled={index===0? true:false}/>
    </div>
);
}

export const ForwardButton=()=> {
    const {index , setIndex} = useContext(InfoContext);

    return(
    <div className="button">
    <input type="button"  id="for"className="button"value="Forward" onClick={()=>index >=5 ?4: ()=>setIndex(index+1)   } disabled={index===4 ? true:false}/>
    {console.log("lol"+index)}
    </div>
    )

}
export default ForwardButton;