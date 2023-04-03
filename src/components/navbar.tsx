import React from 'react'
import Link from 'next/link'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'


const Navbar = () => {
  return (
    <div className='fixed left-0 top-0 w-full z-10 ease-in duration-300'>
      <div className='max-w-[1240px] m-auto flex justify-between items-center p-4'>
        <Link href='/'>
          <h1>TEST</h1>
        </Link>
        <ul>
          <li>
          <Link href='/'>Home</Link>
          </li>
          <li>
          <Link href='/'>Work</Link>
          </li>
          <li>
          <Link href='/'>Contact</Link>
          </li>
        </ul>


        {/* moblie button */}
        <div>
          <AiOutlineMenu size={20} />
        </div>

        <ul>
          <li>
          <Link href='/'>Home</Link>
          </li>
          <li>
          <Link href='/'>Work</Link>
          </li>
          <li>
          <Link href='/'>Contact</Link>
          </li>
        </ul>




      </div>

    </div>
  )
}

export default Navbar

