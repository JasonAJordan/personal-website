import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'


const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [showJobs, setShowJobs] = useState(false)

  const [color, setColor] = useState('transparent')
  const [textColor, setTextColor] = useState('black')

  const handleNav = () => {
    setNav(!nav)
  }

  const handleWorkHover = () => {
    setShowJobs(!showJobs)
  }

  useEffect(()=> {
    const changeColor = () => {
      if(window.scrollY >= 90){
        setColor('#fffffff')
        setTextColor('#000000')
      } else {
        setColor('transparent')
        setTextColor('#fffffff')
      }
    }
  }, []);

  return (
    <div style={{backgroundColor: `${color}`}} className='fixed left-0 top-0 w-full z-10 ease-in duration-300'>
      <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-black'>
        <Link href='/'>
          <h1 style={{color: `${textColor}`}} className='font-bold text-4xl'>Jason Jordan</h1>
        </Link>
        {/* Web button */}
        <ul style={{color: `${textColor}`}}  className='hidden sm:flex'>
          <li className='p-4'>
            <Link href='/'>Home</Link>
          </li>
          <li className='p-4'>
            <Link href='/work' onMouseOver={handleWorkHover} >Work</Link>
          </li>
          <li className='p-4'>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>


        {/* moblie button */}
        <div onClick={handleNav} style={{color: `${textColor}`}} className='block sm:hidden z-10'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
        </div>


        <div className={
          nav        
          ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300"
          : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300"
        }
          >
          <ul >
            <li className='p-4 text=4xl hover:text-gray-500'>
              <Link href='/'>Home</Link>
            </li>
            <li className='p-4 text=4xl hover:text-gray-500'>
              <Link href='/work'>Work</Link>
            </li>
            <li className='p-4 text=4xl hover:text-gray-500'>
              <Link href='/contact'>Contact</Link>
            </li>
          </ul>
        </div>





      </div>

    </div>
  )
}

export default Navbar

