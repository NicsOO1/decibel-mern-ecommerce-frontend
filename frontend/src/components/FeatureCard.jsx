import React from 'react'
import { MdOutlineShield } from "react-icons/md";


const FeatureCard = ({icon, feature, sub}) => {
  return (
    <div className='flex flex-col gap-4 items-center justify-center shadow-[0_0_10px_0_rgba(0,0,0,0.2)] rounded-3xl py-6 px-8'>
      <div className='bg-brandlight w-20 h-20 rounded-full flex items-center justify-center'>
        {icon}
      </div>

      <h3 className='hh1 font-medium text-2xl'>{feature}</h3>

      <p className='text-lg text-gray-500'>{sub}</p>

    </div>
  )
}

export default FeatureCard