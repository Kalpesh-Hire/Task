import { useContext, useState } from "react";
import { TaskContext } from "../../Context/TaskContext";
import "../../CSS/PreviousDetail.css";

function PreviousDetail() {
  const { tasks } = useContext(TaskContext);
  const [filterType, setFilterType] = useState("all");
  const [filterDate, setFilterDate] = useState("");

  const filteredTasks = tasks
    .filter((task) => {
      if (filterType === "pending") {
        return !task.endTime;
      }
      if (filterType === "completed") {
        return task.endTime;
      }
      return true;
    })
    .filter((task) => {
      if (filterDate) {
        return task.date === filterDate;
      }
      return true;
    });

  const ClearFilters = () => {
    setFilterType("");
    setFilterDate("");
  };

  return (
    <div className="taskFilter-container">
      <h2>Task Filter & Status</h2>

      <div className="filter-controls">
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="filter-select"
        >
          <option className="filter-select" value="all">All</option>
          <option className="filter-select" value="pending">Pending</option>
          <option className="filter-select" value="completed">Completed</option>
        </select>

        <input
          type="date"
          value={filterDate}
          onChange={(e) => setFilterDate(e.target.value)}
          className="filter-date"
        />

        <button onClick={() => ClearFilters()}>Clear Filter</button>
      </div>

      <div className="task-list-prev">
        {filteredTasks.length === 0 ? (
          <table className="task-table-prev">
            <thead>
              <tr className="border-head-prev">
                <th>Sr</th>
                <th>Name</th>
                <th>Type</th>
                <th>Date</th>
                <th>Start</th>
                <th>End</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="table-row">
                <td>No Task</td>
                <td>No Task</td>
                <td>No Task</td>
                <td>No Task</td>
                <td>No Task</td>
                <td>No Task</td>
                <td>No Task</td>
              </tr>
            </tbody>
          </table>
        ) : (
          <table className="task-table-prev">
            <thead>
              <tr className="border-head-prev">
                <th>Sr</th>
                <th>Name</th>
                <th>Type</th>
                <th>Date</th>
                <th>Start</th>
                <th>End</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredTasks.map((task, index) => (
                <tr key={index} className="table-row">
                  <td>{index + 1}</td>
                  <td>{task.name}</td>
                  <td>{task.type}</td>
                  <td>{task.date || "-"}</td>
                  <td>{task.startTime || "-"}</td>
                  <td>{task.endTime || "-"}</td>
                  <td className={task.endTime ? "completed" : "pending"}>
                    {task.endTime ? "Completed" : "Pending"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default PreviousDetail;
