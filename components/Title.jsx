import Image from 'next/image'
import React from 'react'
import AllLinks from './AllLinks'

const Title = ({children,title}) => {
  return (
    <div className="flex gap-0 justify-center flex-wrap md:flex-nowrap flex-col-reverse sm:flex-row">
      <div className=" text-slate-800  px-6 md:px-20 py-10 space-y-14 max-w-[1000px] bg-[#ffffff90]">
          <div className="flex justify-between gap-6 items-center">
                  <h1 className="text-2xl md:text-3xl font-bold text-blue-900">
                    {title}
                  </h1>
                  <Image
                    src="/skylogo.png"
                    alt="Sky History"
                    width={250}
                    height={90}
                    className="rounded h-[90px] w-[150px] sm:w-[250px] object-cover"
                  />
                </div>
        {children}
        <AllLinks/>
      </div>
    </div>
  )
}

export default Title
