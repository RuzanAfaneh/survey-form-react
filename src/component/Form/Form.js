import React, { useEffect } from 'react';
import { useState, useContext } from 'react';

import './Form.scss';
import InfoContext from '/home/dev/Desktop/from/src/component/InfoContext.js'
import useForm from '../useForm'

const Form = () => {
  const {values , setValues} = useContext(InfoContext);

  useEffect(() => {
    console.log(values);
  }, [values])

  const [count, setCount] = useState(0)

  return (
    <div className="formContainer">
      <h3 className="title">Enter Your personal info</h3>
      <form className="form">
        <div className="firstCol">
          <input type="text" placeholder="First name" name="firstname" onChange={e=>setValues({...values, firstName:e.target.value} )} required />
          <input type="text" placeholder="Last Name" name="lastname" onChange={e=>setValues({...values, lastName:e.target.value} )} values={values ? values.lastname : ''} required />
          <input type="text" placeholder="Email" name="email" onChange={e => setValues() } values={values ? values.email : ''} required />
        </div>
        <div className="secCol">
          <select id="select" name="country" onChange={e => setValues() } values={values ? values.county : ''} required>
            <option value="" disabled selected> select your country</option>
            <option> Europe </option>
            <option>Asia</option>
            <option>North America </option>
            <option>South America</option>
          </select>

          <div className="incrementor">
            <input className="counter" type="text" name="counter" value={count} onChange={e => setValues() } values={values ? values.counter : ''} required />
            <input className="inc" type="button" value="+" name="increment" onClick={() => setCount(count + 1)} />
            <input className="dec" type="button" value="-" name="decrement" onClick={() => setCount(count - 1)} />
            <span>your incrementor</span>
          </div>
          <div className="gender">
            <input id="age" type="text" placeholder="Age" name="age" required />
            <label>   <input name="gender" type="radio" value="Male" onChange={e => setValues() } values={values ? values.gender : ''} required />Male  <span className="checkMark"></span></label>
            <label> <input name="gender" type="radio" value="Female" onChange={e => setValues() } values={values ? values.gender : ''} required />  <span className="checkMark"></span>Female</label>
          </div>
        </div>
      </form><div class="switch">
        <strong>Do ypu accept <span>term and conditions?</span></strong>
        <input type="checkbox" /></div>
      {/*<input className="submit" type="Submit" value= "SUBMIT THE SURVEY" />*/}

    </div>
  )
}

export default Form;