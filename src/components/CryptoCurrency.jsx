import { useSelector, useDispatch } from "react-redux"
import { chooseCoin } from "../redux/sync/coinSlice"


function CryptoCurrency() { // Component to select a cryptocurrency
  const dispatch = useDispatch()
  const { cryptocurrencies } = useSelector(state => state.cryptocurrencies)
  const { baseCoin } = useSelector(state => state.coins)

  const handleCoin = (e) => {
    dispatch(chooseCoin(e.target.value))
  }
  

  return (
    <>
      <div>
         {/* Dropdown for selecting a cryptocurrency */}
        <select value={baseCoin} // Current selected coin
        onChange={handleCoin}
        className="bg-slate-100 p-2"
        >
          {/* Map through cryptocurrencies to create options */}
          {cryptocurrencies.map(coin =>
            <option key={coin.id} value={coin.id}>{coin.name}</option>
          )}
        </select>
      </div>
    </>
  )
}

export default CryptoCurrency
