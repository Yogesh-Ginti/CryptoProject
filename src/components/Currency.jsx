import { useSelector, useDispatch } from "react-redux"
import { chooseCurr } from "../redux/sync/currencySlice"

function Currency() {
  const {baseCurrency} = useSelector(state => state.currency)
  const dispatch = useDispatch()

  const handleChange =(e)=>{
    dispatch(chooseCurr(e.target.value))
  }
  //REmove it when all set
  console.log(baseCurrency)

  return (
    <div>
      <select value={baseCurrency} onChange={handleChange}>
        <option value="usd">USD</option>
        <option value="inr">INR</option>
        <option value="eur">EUR</option>
        <option value="btc">BTC</option>
        <option value="eth">ETH</option>
        <option value="jpy">JPY</option>
        <option value="gbp">GBP</option>
      </select>
    </div>
  )
}

export default Currency
