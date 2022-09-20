import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='flex justify-between bg-gradient-to-r py-5 px-2 md:px-24 shadow-xl from-darkBG to-black via-black/20 text-white'>
        <a
          className='flex items-center gap-2'
          href='https://www.google.com/maps/dir//Belgrano+1761,+W3400+ABJ,+Corrientes,+Argentina/@-27.4727889,-58.8292437,20z/data=!4m9!4m8!1m0!1m5!1m1!1s0x94456c9fdfe8bf55:0x55bd4f8d7ff2f26c!2m2!1d-58.8290324!2d-27.4727809!3e0'
        >
          <i className='fa-solid fa-location-dot text-red-600/90 text-xl'></i>
          <span>Belgrano 1350, Corrientes Capital - 37948445574</span>
          <i class='fa-solid fa-location-arrow text-xl text-red-600/90'></i>
        </a>
        <a href='tel:+54 9 11 62215976'>Telefono - 9 3794 508606</a>
      </div>
      <div className='bg-white px-2 md:px-24 py-7  flex flex-col items-center shadow-md'>
        <h1 className='md:text-2xl font-bold'>
          Estamos para ayudarte en cualquier momento que necesites
        </h1>
        <h2 className='tracking-wide'>
          No dudes en consultarnos, tambien tenés disponible el boton de
          whatsapp que te llevará directamente a un chat con uno de nuestros
          abogados!
        </h2>
      </div>
    </>
  )
}

export default Footer
