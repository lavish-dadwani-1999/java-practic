import React from 'react'

const Input = ({onChange , name,type,value}) => {
    return (
        <input name={name} type={type} onChange={onChange} value={value} ></input>
    )
}

export default Input
