import Navbar from './components/Navbar'
import FloatingWhatsApp from 'react-floating-whatsapp'
import gustavoProfile from './assets/whatsappProfile.png'

function App() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <Navbar />
      <FloatingWhatsApp
        phoneNumber='+5493794508606'
        accountName='Gustavo Briend'
        statusMessage='Generalmente responde en 1hr'
        chatMessage='Hola soy Gustavo, en que puedo ayudarte?'
        allowClickAway
        placeholder='Escriba su consulta'
        allowEsc
        avatar={gustavoProfile}
      />
    </div>
  )
}

export default App
