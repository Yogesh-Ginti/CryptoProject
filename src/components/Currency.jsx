import { useSelector, useDispatch } from "react-redux"
import { chooseCurr } from "../redux/sync/currencySlice" // Action to select a base currency

function Currency() { // Component to select a base currency
  const dispatch = useDispatch() // Redux dispatch function to send actions
  const { baseCurrency } = useSelector(state => state.currency) // Current base currency from Redux state

  // Handle change in selected currency
  const handleChange = (e) => {
    dispatch(chooseCurr(e.target.value)) // Dispatch action to update base currency
  }

  return (
    <>
      <div className="h-8 w-20 bg-white text-center rounded-md"> 
        {/* Dropdown to select the base currency */}
        <select 
          className="bg-white"
          value={baseCurrency} // Current selected currency
          onChange={handleChange} // Event handler for when the currency is changed
        >
          {/* Currency options */}
          <option value="usd">USD</option> // US Dollar
          <option value="inr">INR</option> // Indian Rupee
          <option value="eur">EUR</option> // Euro
          <option value="btc">BTC</option> // Bitcoin
          <option value="eth">ETH</option> // Ethereum
          <option value="jpy">JPY</option> // Japanese Yen
          <option value="gbp">GBP</option> // British Pound
        </select>
      </div>
    </>
  )
}

export default Currency;
