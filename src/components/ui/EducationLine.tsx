import React from 'react'
import { SchoolIcon } from '../icons'

export default function EducationLine() {
  return (
    <div className="w-10">
    <div className="relative">
      <div className="absolute top-0 bg-background  shadow-secondary   shadow-inner rounded-full p-2 z-10 animate-pulse">
        <SchoolIcon width={30} height={30} />
      </div>
      <div className="w-[2px] h-16 bg-gradient-to-b from-secondary to-transparent absolute top-[46px] left-[22px] "></div>
    </div>
  </div>
  )
}
