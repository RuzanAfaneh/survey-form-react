import React, { useState, useEffect, useContext } from 'react';
import useForm from './useForm'

import valuess from './InfoContext'
import InfoContext from './InfoContext';


export const QuestionOne = () => {

  const {values , setValues} = useContext(InfoContext);

  useEffect(() => {
    console.log(values);

  }, [values])

  return (
    <div className="formContainer">
      <form className="question form  radio">
        <h3>Please rate your overall satisfaction about the service provided.</h3>
        <label><input name="satisfaction" type="radio" value="Not Satisfied"   onChange={e=>setValues({...values, satisfaction:e.target.value} )}values={values ?values.satisfaction :''} required /> Not Satisfied<span class="checkMark" ></span></label>
        <label><input name="satisfaction" type="radio" value="Quite Satisfied"  onChange={e=>setValues({...values, satisfaction:e.target.value} )}values={values ?values.satisfaction :''} required />Quite Satisfied<span class="checkMark"></span></label>
        <label><input name="satisfaction" type="radio" value="Satisfied"  onChange={e=>setValues({...values, satisfaction:e.target.value} )}values={values ?values.satisfaction :''} required /> Satisfied<span class="checkMark"></span></label>
        <label><input name="satisfaction" type="radio" value="Completely Satisfied"  onChange={e=>setValues({...values,satisfaction:e.target.value} )}values={values ?values.satisfaction :''}required /> Completely Satisfied<span class="checkMark"></span>
        </label>
      </form>
    </div>
  );
};
export const QuestionTwo = () => {
  const {values , setValues} = useContext(InfoContext);

  return (
    <div className="formContainer">

      <form className="form question ">
        <h3>How did you hear about our company?</h3>
        <label><input name="know" type="checkbox" value="Google" onChange={e=>setValues({...values,know:e.target.value} )}required /> Google<span class="checkMark box"></span></label>
        <label><input name="know" type="checkbox" value="A friend of mine" onChange={e=>setValues({...values,know:e.target.value} )}required /> A friend of mine<span class="checkMark box"></span></label>
        <label >  <input name="know" type="checkbox" value="print advertise" onChange={e=>setValues({...values,know:e.target.value} )}required /> print advertise<span class="checkMark box"></span></label>
        <label>  <input name="know" type="checkbox" value="Newspaper" onChange={e=>setValues({...values,know:e.target.value} )}required />Newspaper<span class="checkMark box"></span>
        </label>
      </form></div>
  );
};


export const QuestionThree = () => {
  const {values , setValues} = useContext(InfoContext);

  return (
    <div className="formContainer">
      <form className="radio form question ">
        <h3>Do you think to suggest our company to a friend or parent?</h3>
        <label> <input name="suggestion" type="radio" value="Not Satisfied" onChange={e=>setValues({...values,suggestion:e.target.value} )}required />No<span class="checkMark"></span></label>
        <label> <input name="suggestion" type="radio" value="Quite Satisfied" onChange={e=>setValues({...values,suggestion:e.target.value} )}required /> Maybe<span class="checkMark"></span></label>
        <label> <input name="suggestion" type="radio" value="Satisfied" onChange={e=>setValues({...values,suggestion:e.target.value} )}required />probably<span class="checkMark"></span></label>
        <label>  <input name="suggestion" type="radio" value="Completely Satisfied" onChange={e=>setValues({...values,suggestion:e.target.value} )}required /> 100% sure<span class="checkMark"></span>
        </label>
        <div className="textarea">
          <strong> IF no (?) , please describe with a FEW words why</strong>
          <textarea name="reason" />
        </div>
      </form></div>
  );
}

export const LastPage = () => {
  const {values , setValues} = useContext(InfoContext);

  useEffect(() => {
    console.log(values);

  }, [values])
  return (
    <div className="formContainer">
      <div className="from submit-form">
        <i class="fa fa-check0-square-o" ></i>

        <img src={require("./sumbit.png")} /><h2>Survey complete! Thank you for you time.</h2>
        <input className="submit" type="Submit" value="SUBMIT THE SURVEY" />
      </div></div>
  );
}
export default QuestionOne;

