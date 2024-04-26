import './App.css'
import Chart from './components/Chart'
import CryptoCurrency from './components/CryptoCurrency'
import Currency from './components/Currency'
import Exchanger from './components/Exchanger'
import Sidebar from './components/Market'
import Portfolio from './components/Portfolio'
import TimeFrames from './components/TimeFrames'
import ChartDropdown from './components/ChartDropdown'
import SearchBar from './components/SearchBar'
import Header from './components/Header'
// import LineChart from './features/charts/LineChart'
// import BarChart from './features/charts/BarChart'



function App() {
  
  return (
    <>
      <Sidebar/>
      <Portfolio />
      <Exchanger />
      <Currency />
      <TimeFrames />
      <CryptoCurrency />
      <ChartDropdown />
      <Chart/>
      <Header />
      <SearchBar />
      
      
    </>
  )
}

export default App
