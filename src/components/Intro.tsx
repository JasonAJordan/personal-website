import React from 'react'

const Intro = ({heading, message}) => {
  return (
    <div>
      {/* <div className='flex istems-center justify-center'>
        Intro Comp
      </div> */}
      <div className= 'flex istems-center justify-center
                      mb-12 bg-fixed bg-center bg-cover bg-white'>
        <div className=''/>
        <div className='p-5 ml-[-10rem] mt-[10rem]'>
          <h2 className='text-5xl font-bold'>{heading}</h2>
          <p className='py-5 text-xl'>{message}</p>
          <button className='px-8 py-2 border'>Book</button>  
        </div> 
      </div>
    </div>

  )
}

export default Intro