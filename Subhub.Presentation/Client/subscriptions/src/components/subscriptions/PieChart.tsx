// import { Chart, registerables } from "chart.js/auto"; // Import Chart and registerables
// import { useEffect, useRef } from "react";

// Chart.register(...registerables); // Register all necessary components

// // Your component
// export default function PieChart() {
//     const chartRef = useRef<HTMLCanvasElement>(null); // Specify the type of ref
//     const chartInstance = useRef<Chart<"pie"> | null>(null); // Specify the type of ref

//     useEffect(() => {
//         if (chartInstance.current) {
//             chartInstance.current.destroy();
//         }

//         const myChartRef = chartRef.current?.getContext('2d');

//         if (myChartRef) {
//             chartInstance.current = new Chart(myChartRef, {
//                 type: "pie",
//                 data: {
//                     labels: ["Entertainment", "Utilities", "Health & Fitness", "Shopping & Lifestyle", "Business", "Other"],
//                     datasets: [
//                         {
//                             data: [300, 50, 100, 100, 100, 100],
//                             backgroundColor: [
//                                 '#FF6384',
//                                 '#36A2EB',
//                                 '#FFCE56',
//                                 '#8A2BE2',
//                                 '#32CD32',
//                                 '#FF4500'
//                             ],
//                         }
//                     ]
//                 }
//             });
//         }

//         return () => {
//             if (chartInstance.current) {
//                 chartInstance.current.destroy();
//             }
//         };
            
//     }, []);

//     return (
//         <div>
//             <canvas ref={chartRef} style={{width: "300px", height: "200px"}} />
//         </div>
//     );
// }

import { Chart } from "chart.js/auto";
import { useEffect, useRef } from "react";

interface PieChartProps {
  data: {
    labels: string[];
    datasets: {
      data: number[];
      backgroundColor: string[];
    }[];
  };
}

const PieChart: React.FC<PieChartProps> = ({ data }) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart<"pie"> | null>(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const myChartRef = chartRef.current?.getContext('2d');

    if (myChartRef) {
      chartInstance.current = new Chart(myChartRef, {
        type: "pie",
        data: data
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data]);

  return (
    <div>
      <canvas ref={chartRef} style={{ width: "300px", height: "200px" }} />
    </div>
  );
};

export default PieChart;
