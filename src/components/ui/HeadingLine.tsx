import React from 'react'
import { CircleAdjustIcon } from '../icons'

export default function HeadingLine({classNames={wrapper:"",line:"w-52"}}:{classNames?:{wrapper?:string;line?:string}}) {
    const { wrapper, line } = classNames;
  return (
    <div className={`${wrapper} flex items-center `}>
          
    <span className='animate-spin duration-1000'><CircleAdjustIcon width={20} height={20} fill='#7828c8' /></span>
    <div className={`${line} h-[2px] bg-gradient-to-r from-secondary to-transparent -ms-[3px]`}></div>
    </div>

  )
}
