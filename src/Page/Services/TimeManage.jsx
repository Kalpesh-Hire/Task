import { useContext, useState } from "react";
import { TaskContext } from "../../Context/TaskContext";
import "../../CSS/TimeManage.css";
import { useDispatch, useSelector } from "react-redux";
import { addTimeToTask } from "../../Redux/TaskSlice";

function TimeManage() {
  // const { tasks, addTimeToTask } = useContext(TaskContext);
  const tasks = useSelector((state) => state.tasksCreate.tasks);
  const dispatch = useDispatch();

  const [selectedIndex, setSelectedIndex] = useState(null);
  const [timeData, setTimeData] = useState({
    date: "",
    startTime: "",
    endTime: "",
  });

  const handleTimeInputChange = (e) => {
    setTimeData({
      ...timeData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitTime = (e) => {
    e.preventDefault();
    if (selectedIndex !== null) {
      // addTimeToTask(selectedIndex, timeData);
      dispatch(addTimeToTask({ index: selectedIndex, timeData: timeData }));
      setSelectedIndex(null);
      setTimeData({ date: "", startTime: "", endTime: "" });
    }
  };

  const handleSelectTask = (index) => {
    setSelectedIndex(index);
    const task = tasks[index];
    setTimeData({
      date: task.date || "",
      startTime: task.startTime || "",
      endTime: task.endTime || "",
    });
  };

  const closeForm = () => {
    setSelectedIndex(null);
    setTimeData({ date: "", startTime: "", endTime: "" });
  };

  return (
    <div className="timeManage-container">
      <h2>Time Management</h2>

      <div className="task-list">
        {tasks.length === 0 ? (
          <table className="task-table">
            <thead>
              <tr className="border-head">
                <th>Sr</th>
                <th>Task Time</th>
                <th>Task Type</th>
                <th>Task Date</th>
                <th>Task Start</th>
                <th>Task End</th>
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
              </tr>
            </tbody>
          </table>
        ) : (
          <>
            <h3>Add Time in the Tasks</h3>
            <table className="task-table">
              <thead>
                <tr className="border-head">
                  <th>Sr</th>
                  <th>Task Time</th>
                  <th>Task Type</th>
                  <th>Task Date</th>
                  <th>Task Start</th>
                  <th>Task End</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((task, index) => (
                  <tr
                    key={index}
                    className="table-row"
                    onClick={() => handleSelectTask(index)}
                  >
                    <td>{index + 1}</td>
                    <td>{task.name}</td>
                    <td>{task.type}</td>
                    <td>{task.date || "-"}</td>
                    <td>{task.startTime || "-"}</td>
                    <td>{task.endTime || "-"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
        {/* {tasks.map((task, index) => (
          <div
            key={index}
            className={`task-item ${selectedIndex === index ? "selected" : ""}`}
            onClick={() => handleSelectTask(index)}
          >
            <strong>{task.name}</strong> | {task.type}
            {task.date && (
              <div>
                Date: {task.date} | {task.startTime} - {task.endTime}
              </div>
            )}
          </div>
        ))} */}
      </div>

      {selectedIndex !== null && (
        <div className="modal-container-time">
          <div className="modal-content-time">
            <h4>Edit Time for: {tasks[selectedIndex].name}</h4>
            <form onSubmit={handleSubmitTime} className="timeManage-form">
              <div className="input-form">
                <input
                  type="date"
                  name="date"
                  value={timeData.date}
                  onChange={handleTimeInputChange}
                  required
                />
                <input
                  type="time"
                  name="startTime"
                  value={timeData.startTime}
                  onChange={handleTimeInputChange}
                  required
                />
                <input
                  type="time"
                  name="endTime"
                  value={timeData.endTime}
                  onChange={handleTimeInputChange}
                />
              </div>
              <div className="modal-buttons-time">
                <button type="submit" className="assign-btn">
                  Assign Time
                </button>
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={closeForm}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default TimeManage;
