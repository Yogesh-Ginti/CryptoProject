import './App.css'
import CryptoCurrency from './components/CryptoCurrency'
import Currency from './components/Currency'
import Exchanger from './components/Exchanger'
import Sidebar from './components/Market'
import Portfolio from './components/Portfolio'


function App() {
  

  return (
    <>
      <Sidebar/>
      <Portfolio />
      <Exchanger />
      <Currency />
      <CryptoCurrency />
      
    </>
  )
}

export default App
