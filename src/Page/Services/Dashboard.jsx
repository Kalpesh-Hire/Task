import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";
import { taskTypeCategories } from "../../assets/Data";
function Dashboard() {
  const tasks = useSelector((state) => state.tasksCreate.tasks);
  const dispatch = useDispatch();

  const categoryType = Object.keys(taskTypeCategories).map((category) => {
    const typesCategory = taskTypeCategories[category];
    const CountCategory = tasks.filter((task) =>
      typesCategory.includes(task.type)
    ).length;
    return { category, CountCategory };
  });

  return (
    <div>
      <h3>Task Distribution by Category</h3>
      <BarChart width={1200} height={300} data={categoryType}>
        <XAxis
          // angle={-15}
          interval={0}
          textAnchor="end"
          height={100}
          dataKey="category"
          stroke="#8884d8"
        />
        <YAxis />
        <Tooltip wrapperStyle={{ width: 100, backgroundColor: "#f0f0f0" }} />
      
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Bar dataKey="CountCategory" fill="#8884d8" barSize={90} />
      </BarChart>
    </div>
  );
}

export default Dashboard;
