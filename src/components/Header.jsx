import React from 'react'

const Header = () => {
  return (
    <div
      className={`h-full bg-[url('https://www.justresolve.com/wordpress/wp-content/uploads/2018/12/Scale-of-Justice-Balance-Law-1650x1080.jpg')] rounded-lg`}
    >
      <div className='h-full bg-gradient-to-l from-black/40 to-black'>
        <div className='text-white px-2 md:px-24 md:pt-2 '>
          <div className='md:w-1/2 flex flex-col'>
            <h1 className='text-2xl md:text-4xl mb-2'>
              <span className=' border-b-2 border-action'>Asesoria</span>{' '}
              Jurídica
            </h1>
            <p className='md:text-xl'>
              En tiempos donde los tribunales están sobre cargados de
              expedientes, los estudios jurídicos deben adaptarse a las nuevas
              herramientas que brinda la tecnología. Mi consultorio jurídico
              virtual nació para atender de manera rápida y efectiva la demanda
              de cientos de clientes a lo largo del país. Porque la justicia se
              logra con compromiso, primero con el cliente y luego con la causa.
            </p>
            <button className='flex w-2/3  self-center md:self-start mb-8 items-baseline gap-1 justify-center bg-gradient-to-br from-action to-amber-700/70 px-3 md:px-5 py-3 rounded-lg text-xl md:text-2xl mt-6'>
              Nuestros Servicios
              <i class='fa-solid fa-bell-concierge'></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
