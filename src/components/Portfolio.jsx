import { useSelector } from "react-redux"; // Redux hook to select state
import PieChart from '../features/charts/PieChart'; // Component to render a pie chart

function Portfolio() { // Component to display cryptocurrency portfolio
  // Extract relevant data from Redux state
  const { cryptocurrencies, status, error } = useSelector((state) => state.cryptocurrencies);

  // Calculate the total value of the top 3 cryptocurrencies in the portfolio
  const value = [...cryptocurrencies].slice(0, 3).reduce((acc, crypto) => acc
    + crypto.current_price, 0 // Accumulate the current prices of the first 3 cryptos
  );

  const total = value.toFixed(2); // Format the total value to 2 decimal places

  return (
    <>
      <div className="mt-8">
        {/* Portfolio title and total value display */}
        <div className="flex justify-between"> 
          <h1 className="text-2xl font-bold">Portfolio</h1>  {/*Portfolio title*/}
          <h2 className="text-xl">Total Value ${total}</h2> {/*Display total portfolio value*/}
        </div>

        {/* Display pie chart representing the portfolio */}
        <div className="flex justify-start items-end mt-4"> 
          <PieChart /> {/*Render the PieChart component*/}
        </div>
      </div>
    </>
  )
}

export default Portfolio; 