import { useSelector, useDispatch } from "react-redux"
import { chooseCurr } from "../redux/sync/currencySlice"

function Currency() {
  const {baseCurrency} = useSelector(state => state.currency)
  const dispatch = useDispatch()

  const handleChange =(e)=>{
    dispatch(chooseCurr(e.target.value))
  }

  return (
    <div>
      <select value={baseCurrency} onChange={handleChange}>
        <option value="usd">USD</option>
        <option value="inr">INR</option>
        <option value="eur">EUR</option>
      </select>
    </div>
  )
}

export default Currency
