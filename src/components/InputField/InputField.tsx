import React from 'react'
import "./InputField.css"

const InputField = () => {
  return (
    <form className='input'>
      <input
        type="input"
        className='input-field'
        placeholder='Enter a task'
      />
      <button
        type='submit'
        className='input-submit'
      >
        +
      </button>
    </form>
  )
}

export default InputField