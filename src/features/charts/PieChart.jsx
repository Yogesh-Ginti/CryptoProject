import { Pie } from "react-chartjs-2";
import { Chart as ChartJs, ArcElement, Tooltip, Legend } from "chart.js";
import { useSelector } from "react-redux";

ChartJs.register(ArcElement, Tooltip, Legend);




function PieChart() {
  const { cryptocurrencies, status, error } = useSelector((state) => state.cryptocurrencies);
  const cryptos = cryptocurrencies.slice(0,3).map((item)=>item.id)
  const prices = cryptocurrencies.slice(0,3).map((item)=>item.current_price)
  
  const data = {
    labels: cryptos,
    datasets: [
      {
        label: "$",
        data: prices,
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        borderWidth: 1,
        hoverOffset: 8,
        
      },
    ],
  };

  const options = {
    
    aspectRatio: 2,
    plugins: {
      legend: {        
        position: "right",
        fullWidth: false,
        labels: {
          color: "#5c5c5c",
          padding: 12,
          usePointStyle: true,
          font: {
            size: 13,
            weight: "bold",
          },
        },
      },
      datalabels: {
        align: "center",
        color: "#FFF",
        font: {
          size: 25,
          weight: "bold",
        },
      },
    },
  };
  
  return (
    <div>
      <Pie data={data} options={options}></Pie>
    </div>
  )
}

export default PieChart