import React from 'react'

const RadioOption = ({label}) => {
  return (
    <div className='border rounded-full p-3 m-4'>
      
      <input id={label} type="radio" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"/>
      <label htmlFor={label} className='pl-5 font-bold'>{label}</label>
      
    </div>
  )
}

export default RadioOption