import React from 'react';

export default ForwardButton=()=>{
return(
    <div className="button">
    <input type="button" id="back"className="button" value="Backwards" onClick={()=>index<=0 ? 0:setIndex(index-1)} disabled={index===0? true:false}/>
    </div>
);
} 

export const BackwardsButton=()=> {
    <div className="button">
    <input type="button"  id="for"className="button"value="Forward" onClick={()=>index >=5 ?4:setIndex(index+1)} disabled={index===4 ? true:false}/>
    </div>


}