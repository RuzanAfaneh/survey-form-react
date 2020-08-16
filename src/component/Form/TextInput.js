import React from 'react'

const handleChange = (e) => {
    return (
        setValues({ ...values, [e.target.name]: e.target.value }),
        console.log(values),
        console.log("lol")
    )
}

const InputText = (props) => {
    return (
        <div>
            <input
                type="text"
                value={props.value}
                name={props.name}
                placeholder={props.placeholder}
                onChange={handleChange}
            />
        </div>
    )

}