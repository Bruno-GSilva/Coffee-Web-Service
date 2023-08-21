import { useState, useEffect } from "react";
import { Chart } from "primereact/chart";

export default function PageDashboard() {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const data = {
      labels: ["destreza", "attack"],
      datasets: [
        {
          label: "Sapatos",
          data: [540, 925, 702, 620],
          backgroundColor: [
            "rgba(255, 159, 64, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(153, 102, 255, 0.2)",
          ],
          borderColor: [
            "rgb(255, 159, 64)",
            "rgb(75, 192, 192)",
            "rgb(54, 162, 235)",
            "rgb(153, 102, 255)",
          ],
          borderWidth: 1,
        },
        {
          label: "Camisas",
          data: [240, 125, 202, 320],
          backgroundColor: [
            "rgba(255, 159, 64, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(153, 102, 255, 0.2)",
          ],
          borderColor: [
            "rgb(255, 159, 64)",
            "rgb(75, 192, 192)",
            "rgb(54, 162, 235)",
            "rgb(153, 102, 255)",
          ],
          borderWidth: 1,
        },
      ],
    };
    const options = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };

    setChartData(data);
    setChartOptions(options);
  }, []);

  return (
    <div>
      <div className="flex w-full m-2 justify-around">
        <div className="w-full h-32 mx-2 rounded-lg flex justify-center items-center flex-col border-4 border-black">
          <h3 className="font-bold text-2xl">Lucros</h3>
          <h1 className="font-semibold text-4xl text-green-500">5 cents</h1>
        </div>
        <div className="w-full h-32 mx-2 rounded-lg flex justify-center items-center flex-col border-4 border-black">
          <h3 className="font-bold text-2xl">Dividas</h3>
          <h1 className="font-semibold text-4xl text-red-500">-21 Bi</h1>
        </div>
        <div className="w-full h-32 mx-2 rounded-lg flex justify-center items-center flex-col border-4 border-black">
          <h3 className="font-bold text-2xl">Vendidos</h3>
          <h1 className="font-semibold text-4xl text-red-500">- 21 Bi</h1>
        </div>
        <div className="w-full h-32 mx-2 rounded-lg flex justify-center items-center flex-col border-4 border-black">
          <h3 className="font-bold text-2xl ">Comprados</h3>
          <h1 className="font-semibold text-4xl text-red-500">-21 Bi</h1>
        </div>
      </div>
      <div className="flex items-end w-full">
        <Chart
          type="bar"
          data={chartData}
          options={chartOptions}
          className="flex-1"
        />
        <Chart
          type="doughnut"
          data={chartData}
          options={chartOptions}
          className="w-80"
        />
      </div>
    </div>
  );
}
