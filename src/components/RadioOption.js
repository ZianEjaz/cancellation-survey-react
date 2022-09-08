import React from 'react'

const RadioOption = ({label}) => {
  return (
    <div className='flex border items-center rounded-full p-3 my-4'>
      
      <input id={label} type="radio" className="h-5 w-5 text-xl text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"/>
      <label htmlFor={label} className='pl-5 font-bold'>{label}</label>
      
    </div>
  )
}

export default RadioOption