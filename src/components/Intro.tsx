import React from 'react'

const Intro = ( {message} : any ) => {
  return (
    <div className='boder-test width-full flex items-center justify-center'>
      <div className='min-w-[980px]'>
        <div className= 'grid grid-cols-3 gap-8 '>
          {/* Column #1 */}
          <div className='col-span-2'>
            <p className=' py-5 text-xl'>{message}</p>
          </div>

          {/* Column #2 */}
          <div> column 2</div>
        </div>
      </div>



      {/* <div className= 'flex istems-center justify-center mb-12 bg-fixed bg-center bg-cover bg-white'>
          <div className='boder-test p-5 ml-[-10rem] mt-[10rem] w-[1200px]'>
            <h2 className='intro-title '>
                Hi, I'm Jason Jordan,{"\n"}
                a Software Engineer based in NYC..
            </h2 >
            <p className='py-5 text-xl'>{message}</p>
          </div> xdc x 
      </div> */}


    </div>)
}

export default Intro