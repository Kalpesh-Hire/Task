import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts";
import { taskTypeCategories } from "../../assets/Data";
import PreviousDetail from "./PreviusDetails";
import "../../CSS/DashboardGraph.css";
function Dashboard() {
  const tasks = useSelector((state) => state.tasksCreate.tasks);
  const dispatch = useDispatch();
  const [barChart, setBarChart] = useState(true);
  const [pieChart, setPieChart] = useState(false);
  const [lineChart, setLineChart] = useState(false);
  const [showTable, setShowTable] = useState(false);

  const categoryType = Object.keys(taskTypeCategories).map((category) => {
    const typesCategory = taskTypeCategories[category];
    const CountCategory = tasks.filter((task) =>
      typesCategory.includes(task.type)
    ).length;
    return { category, CountCategory };
  });

  const showDataTable = () => {
    setShowTable(!showTable);
    setBarChart(false);
    setPieChart(false);
    setLineChart(false);
  };

  return (
    <div className="container-dashboard">
      <h3>Task Distribution by Category</h3>
      <div className="btns-dashboard">
        <button className="bar" onClick={() => setBarChart(!barChart)}>
          Bar Chart
        </button>
        <button className="pie" onClick={() => setPieChart(!pieChart)}>
          Pie Chart
        </button>
        <button className="lineChart" onClick={() => setLineChart(!lineChart)}>
          Line Chart
        </button>
        <button className="lineChart" onClick={() => setShowTable(false)}>
          Close Table
        </button>
      </div>
      {barChart && (
        <div className="BarChart-dashboard">
         <h2>Bar Chart</h2>
          <BarChart
            onClick={() => showDataTable()}
            width={1150}
            height={300}
            data={categoryType}
          >
            <XAxis
              // angle={-15}
              interval={0}
              textAnchor="end"
              height={100}
              dataKey="category"
              stroke="#8884d8"
            />
            <YAxis />
            <Tooltip
              wrapperStyle={{ width: 100, backgroundColor: "#f0f0f0" }}
            />

            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <Bar dataKey="CountCategory" fill="#8884d8" barSize={90} />
          </BarChart>
        </div>
      )}

      {showTable && <PreviousDetail />}

      {/* <PieChart height={400} width={400}>
          <Pie
            data={[
              {
                
                percent: "CountCategory",
                value: "categoryType",
              },
            ]}
            dataKey="category"
            fill="#8884d8"
            label
            nameKey="value"
          >
            
          </Pie>
          <Legend />
          <Tooltip wrapperStyle={{ width: 100, backgroundColor: "#f0f0f0" }} />
        </PieChart> */}
      {/* <RechartsHookInspector setPosition={() => {}} /> */}

      {pieChart && (
        <div className="PieChart-dashboard">
          <h2>Pie Chart</h2>
          <PieChart onClick={() => showDataTable()} width={1150} height={300}>
            <Pie
              data={categoryType}
              dataKey="CountCategory"
              nameKey="category"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {categoryType.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={
                    ["orange", "green", "blue", "red", "indigo", "violet"][
                      index % 6
                    ]
                  }
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>
      )}
      {/* Lines chart */}

      {lineChart && (
        <div className="LineChart-dashboard">
          <h2>Line Chart</h2>
          <LineChart
            onClick={() => showDataTable()}
            data={categoryType}
            width={1150}
            height={300}
            margin={{
              bottom: 5,
              left: 20,
              right: 30,
              top: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Legend />
            <Tooltip
              cursor={{
                stroke: "gold",
                strokeWidth: 2,
              }}
              defaultIndex={3}
            />
            <Line
              activeDot={{
                r: 8,
              }}
              dataKey="CountCategory"
              stroke="#8884d8"
              type="monotone"
            />
          </LineChart>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
