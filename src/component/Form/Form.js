import React, { useEffect } from 'react';
import { useState, useContext } from 'react';

import './Form.scss';
import InfoContext from '../InfoContext'
import CheckValues from './checkValues'


const Form = () => {

  const { values, setValues } = useContext(InfoContext);
  const [count, setCount] = useState(0)

  const handleChange = (e) => {
    return (
      setValues({ ...values, [e.target.name]: e.target.value })
    )
  }

  useEffect(() => {
    return ()=>
     {    for (const i in values) {
        console.log(i)
      if (values[i] === '' ){
        alert(i+" is empty");
        break;
     }     }
    }
  }, [])
  return (
    <div className="formContainer">
      <h3 className="title">Enter Your personal info</h3>
      <form className="form" >
        <div className="firstCol">
          <input type="text" placeholder="First name" name="firstName" onChange={handleChange} required />
          <input type="text" placeholder="Last Name" name="lastName" onChange={handleChange} values={values ? values.lastnNme : ''} required />
          <input type="text" placeholder="Email" name="email" onChange={handleChange} values={values ? values.email : ''} required />
        </div>
        <div className="secCol">
          <select id="select" name="country" onChange={handleChange} required>
            <option value="" disabled > select your country</option>
            <option values="Europe"> Europe </option>
            <option value="Asia">Asia</option>
            <option value="North America">North America </option>
            <option value="South America">South America</option>
          </select>

          <div className="incrementor">
            <input className="counter" type="text" name="counter" value={count} onChange={handleChange} values={values ? values.counter : ''} required />
            <input className="inc" type="button" value="+" name="increment" onClick={() => setCount(count + 1)} />
            <input className="dec" type="button" value="-" name="decrement" onClick={() => count < 1 ? 0 : setCount(count - 1)} />
            <span>your incrementor</span>
          </div>
          <div className="gender">
            <input id="age" type="text" placeholder="Age" name="age" required />
            <label>   <input name="gender" type="radio" value="Male" onChange={handleChange} values={values ? values.gender : ''} required />Male  <span className="checkMark"></span></label>
            <label> <input name="gender" type="radio" value="Female" onChange={handleChange} values={values ? values.gender : ''} required />  <span className="checkMark"></span>Female</label>
          </div>
        </div>
      </form>

      <div className="button-switch">
        <h4>Do you accept terms and etc ..  </h4>
        <input type="checkbox" id="switch-green" className="switch" name="terms" onChange={handleChange} />
        <label for="switch-green" className="lbl-off"></label>

      </div>
    </div>

  )
}

export default Form;