import { useSelector } from "react-redux";
import PieChart from '../features/charts/PieChart'
function Portfolio() {

  const { cryptocurrencies, status, error } = useSelector((state) => state.cryptocurrencies);
  const value = [...cryptocurrencies].slice(0,3).reduce((acc,crypto)=>acc
  +crypto.current_price,0
)
  const total = value.toFixed(2)
  return (
    <div>
      <h1>Portfolio</h1>
      <h2>Total Value ${total}</h2>
      <PieChart />
    </div>
  )
}

export default Portfolio
