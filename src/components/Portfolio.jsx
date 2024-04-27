import { useSelector } from "react-redux";
import PieChart from '../features/charts/PieChart'
function Portfolio() {

  const { cryptocurrencies, status, error } = useSelector((state) => state.cryptocurrencies);
  const value = [...cryptocurrencies].slice(0, 3).reduce((acc, crypto) => acc
    + crypto.current_price, 0
  )
  const total = value.toFixed(2)
  return (
    <>
      <div>
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">Portfolio</h1>
          <h2 className="text-xl">Total Value ${total}</h2>
        </div>
        <div className="flex justify-start items-end mt-4"><PieChart /></div>
      </div>
    </>
  )
}

export default Portfolio
