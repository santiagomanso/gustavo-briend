import React from 'react'
import { useState } from 'react'

const Navbar = () => {
  //variable
  const [open, setOpen] = useState(false)

  const handlerOpen = () => {
    if (open === true) {
      setOpen(false)
    } else {
      setOpen(true)
    }
  }

  return (
    <nav className=' select-none'>
      {/* pc navigation */}
      <ul className='hidden lg:flex text-white  justify-between px-2 lg:px-20 pt-4'>
        <div className='flex items-center gap-1'>
          <i class='fa-solid fa-house'></i>
          <li className='hover:cursor-pointer text-xl'>home</li>
        </div>
        <div className='flex gap-5'>
          <div className='flex gap-1 items-center'>
            <i class='fa-solid fa-users'></i>
            <li className='hover:cursor-pointer text-xl'>Quienes somos</li>
          </div>
          <div className='flex gap-1 items-center'>
            <i class='fa-sharp fa-solid fa-address-card'></i>
            <li className='hover:cursor-pointer text-xl'>Contacto</li>
          </div>
        </div>
      </ul>

      {/* phone navigation */}

      {/* boton visible fuera del navbar */}
      <div className='lg:hidden'>
        <i
          onClick={handlerOpen}
          class={` transition-all duration-300 ${
            open ? 'opacity-0' : 'opacity-100'
          } fa-solid fa-bars text-white text-3xl flex justify-end px-5 py-2`}
        ></i>

        <ul
          className={`pt-20 flex flex-col items-center gap-10 h-screen absolute w-full top-0 text-white text-lg px-5 py-2 bg-black/50
             transition-all duration-500 
            ${open ? '-translate-x-0' : 'translate-x-full'}`}
        >
          <i
            onClick={handlerOpen}
            class='fa-solid fa-bars text-white text-3xl flex justify-end absolute right-0 top-0 px-5 py-2'
          ></i>
          <li className='flex w-1/2 items-center gap-4 justify-start'>
            <i class='fa-solid fa-house'></i>
            <span>Home</span>
          </li>
          <li className='flex w-1/2 items-center gap-4 justify-start'>
            <i class='fa-solid fa-users'></i>
            <span>Quienes Somos</span>
          </li>
          <li className='flex w-1/2 items-center gap-4 justify-start'>
            <i class='fa-sharp fa-solid fa-address-card'></i>
            <span>Contacto</span>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
