import React, { useState } from 'react';

export const QuestionOne = () => {
  return (
    <div className="formContainer">

    <form className="question form  radio">
      <h3>Please rate your overall satisfaction about the service provided.</h3>
      <label><input name="satisfaction" type="radio" value="Not Satisfied" required /> Not Satisfied<span class="checkMark" ></span></label>
      <label><input name="satisfaction" type="radio" value="Quite Satisfied" required />Quite Satisfied<span class="checkMark"></span></label>
      <label><input name="satisfaction" type="radio" value="Satisfied" required /> Satisfied<span class="checkMark"></span></label>
      <label><input name="satisfaction" type="radio" value="Completely Satisfied" required /> Completely Satisfied<span class="checkMark"></span>
      </label>
    </form>
</div>
  );
};
export const QuestionTwo = () => {
  return (
    <div className="formContainer">

    <form className="form question ">
      <h3>How did you hear about our company?</h3>
      <label><input name="know" type="checkbox" value="Google" required /> Google<span class="checkMark box"></span></label>
      <label><input name="know" type="checkbox" value="A friend of mine" required /> A friend of mine<span class="checkMark box"></span></label>
      <label >  <input name="know" type="checkbox" value="print advertise" required /> print advertise<span class="checkMark box"></span></label>
      <label>  <input name="know" type="checkbox" value="Newspaper" required />Newspaper<span class="checkMark box"></span>
      </label>
    </form></div>
  );
};


export const QuestionThree = () => {
  return (
    <div className="formContainer">
    <form className="radio form question ">
      <h3>Do you think to suggest our company to a friend or parent?</h3>
      <label> <input name="suggestion" type="radio" value="Not Satisfied" required />No<span class="checkMark"></span></label>
      <label> <input name="suggestion" type="radio" value="Quite Satisfied" required /> Maybe<span class="checkMark"></span></label>
      <label> <input name="suggestion" type="radio" value="Satisfied" required />probably<span class="checkMark"></span></label>
      <label>  <input name="suggestion" type="radio" value="Completely Satisfied" required /> 100% sure<span class="checkMark"></span>
      </label>
     
      <div className="textarea">
       <strong> IF no (?) , please describe with a FEW words why</strong>
      <textarea  name="reason" />
</div>
    </form></div>
  );
}

export const LastPage = () => {
return (
  <div className="formContainer">
<div className="from submit-form">
<i class="fa fa-check0-square-o" ></i>

<img src={require("./sumbit.png")}/><h2>Survey complete! Thank you for you time.</h2>
<input className="submit" type="Submit" value= "SUBMIT THE SURVEY"/>
</div></div>
);
}
export default QuestionOne;
