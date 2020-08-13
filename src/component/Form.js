import React from 'react';
import {useState , useContext  } from 'react';
import '/home/dev/Desktop/from/src/style/Form.css';
import {InfoContext} from '../InfoContext';
import useForm from '/home/dev/Desktop/from/src/component/useForm.js'


const Form =()=>{
  const [value, setValue] = useState(false);
  const {values , handleChange , handleSubmit} = useForm(login);
  function login()
  {
    console.log(values);
  }
const [count , setCount] = useState(0)

    return (
        <div className="formContainer">
  <h3 className="title">Enter Your personal info</h3>
        <form className="form" onSubmit={handleSubmit}>
            <div className="firstCol">
                <input type="text" placeholder="First name" name="firstname" onChange={handleChange} values={values? values.firstname: ''} required />
                <input type="text" placeholder="Last Name" name="lastname" onChange={handleChange} values={values? values.lastname: ''} required/>
                <input type="text" placeholder="Email" name="email" onChange={handleChange} values={values? values.email: ''} required/>
            </div>
            <div className="secCol">
    <select id = "select"name="country" onChange={handleChange} values={values? values.county: ''} required>
    <option value="" disabled selected> select your country</option>
      <option> Europe </option>
      <option>Asia</option>
      <option>North America </option>
      <option>South America</option>
    </select>

<div className="incrementor">
    <input className ="counter" type="text"  name="counter"   value={count} onChange={handleChange} values={values? values.counter: ''}  required/>
    <input className="inc"type="button" value="+" name="increment" onClick={()=>setCount(count+1)}/>
    <input className="dec"type="button" value="-" name="decrement" onClick={()=>setCount(count-1)}/>
    <span>your incrementor</span>
</div>
<div className="gender">
  <input id ="age" type="text" placeholder="Age" name="age" required  />
<label>   <input name="gender" type="radio"  value="Male" onChange={handleChange}values={values? values.gender: ''}required/>Male  <span className="checkMark"></span></label>
  <label> <input name="gender" type="radio" value="Female" onChange={handleChange}values={values? values.gender: ''} required />  <span className="checkMark"></span>Female</label>
</div>
          </div>
        </form><div class="switch">
            <strong>Do ypu accept <span>term and conditions?</span></strong>
            <input type="checkbox"/></div>
            {/*<input className="submit" type="Submit" value= "SUBMIT THE SURVEY" />*/}

        </div>
    )}

    export default Form;