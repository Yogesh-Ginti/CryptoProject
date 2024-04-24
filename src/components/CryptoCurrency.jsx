import { useSelector, useDispatch } from "react-redux"
import { chooseCoin } from "../redux/sync/coinSlice"


function CryptoCurrency() {
  const dispatch = useDispatch()
  const {cryptocurrencies} = useSelector(state=>state.cryptocurrencies)
  const {baseCoin} = useSelector(state=>state.coins)

  const handleCoin =(e)=>{
    dispatch(chooseCoin(e.target.value))
  }

  return (
    <div>
      <select value={baseCoin} onChange={handleCoin}>
        {cryptocurrencies.map(coin =>
        <option key={coin.id} value={coin.id}>{coin.name}</option>
        )}
      </select>
    </div>
  )
}

export default CryptoCurrency
