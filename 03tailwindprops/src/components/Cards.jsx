import React from 'react'

function Card({title="abc",myObj}) {
  return (
    <div className="max-w-xs p-6 rounded-md shadow-md bg-black mb-2">
    <img
      src="https://images.pexels.com/photos/6534326/pexels-photo-6534326.jpeg?auto=compress&cs=tinysrgb&w=600"
      alt=""
      className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
    />
    <div className="mt-6 mb-2">
      <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
        {title}
      </span>
      <h2 className="text-xl font-semibold tracking-wide">name: {myObj.name} | age: {myObj.age}</h2>
    </div>
    <p className="text-gray-300">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
      amet
    </p>
  </div>
  )
}

export default Card