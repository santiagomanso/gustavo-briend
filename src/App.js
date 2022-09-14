import Navbar from './components/Navbar'
import FloatingWhatsApp from 'react-floating-whatsapp'
import gustavoProfile from './assets/whatsappProfile.png'

function App() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-content2 to to-darkBG'>
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
