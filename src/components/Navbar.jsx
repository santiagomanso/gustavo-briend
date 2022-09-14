import { useState } from 'react'

const Navbar = () => {
  const [open, setOpen] = useState(false) //inicializamos un estado por defecto en false

  const handlerOpen = () => {
    if (!open) {
      setOpen(true)
    } else {
      setOpen(false)
    }
  }

  return (
    <nav className='lg:text-xl text-white'>
      <ul className='hidden lg:flex justify-between'>
        <div>
          <li>
            <i className='fa-solid fa-house'></i>
            <span>
              <a href='/'>Cirkuk Gastrobar</a>
            </span>
          </li>
        </div>
        <div className='flex gap-10'>
          <li>
            <i className='fa-solid fa-rss'></i>
            <a href='/blog'>blog</a>
          </li>
          <li>
            <a href='/carta'>carta</a>
          </li>
          <li>
            <a href='/about'>quienes somos</a>
          </li>
          <li>
            <a href='/donde-estamos'>donde estamos</a>
          </li>
          <li>
            <a href='/reservations'>reservas</a>
          </li>
        </div>
      </ul>

      <i
        onClick={handlerOpen}
        className='fa-solid fa-bars text-2xl select-none'
      ></i>
      <aside
        className={` ${
          open ? '' : 'translate-x-full'
        }  flex justify-end lg:hidden duration-1000`}
      >
        <i
          onClick={handlerOpen}
          className='fa-solid fa-bars text-2xl select-none absolute'
        ></i>
        <ul className='bg-gray-300 h-screen flex flex-col gap-10 px-10 py-5'>
          <li>Home</li>
          <li>Blog</li>
          <li>Carta</li>
          <li>Quienes Somos</li>
          <li>Donde estamos</li>
          <li>Reservas</li>
        </ul>
      </aside>
    </nav>
  )
}

export default Navbar
