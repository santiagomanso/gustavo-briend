import Navbar from './components/Navbar'
import FloatingWhatsApp from 'react-floating-whatsapp'
import gustavoProfile from './assets/whatsappProfile.png'
import Footer from './components/Footer'
import Carousel from './components/Carousel'

function App() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-darkBG to to-content2 via-slate-900'>
      <Navbar />
      <Carousel />
      <Footer />
      <FloatingWhatsApp
        phoneNumber='+5493794508606'
        accountName='Gustavo Briend'
        statusMessage='Generalmente responde en 1hr'
        chatMessage='Hola soy Gustavo Briend en que puedo ayudarte?'
        allowClickAway
        placeholder='Escriba su consulta'
        allowEsc
        avatar={gustavoProfile}
      />
    </div>
  )
}

export default App
