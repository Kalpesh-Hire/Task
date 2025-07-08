import React, { useContext, useState } from "react";
import "../../CSS/AddTask.css";
// import { TaskContext } from "../../Context/TaskContext";
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask } from "../../Redux/TaskSlice";

import { taskTypeCategories } from "../../assets/Data"; 

function AddTask() {
  const tasks = useSelector((state) => state.tasksCreate.tasks);
  const dispatch = useDispatch();

  // console.log(categoryCounts);
  // const { tasks, addTask, editTasks } = useContext(TaskContext);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    description: "",
  });

  const [editIndex, setEditIndex] = useState(null);

  const handleAddTaskClick = () => {
    setFormData({ name: "", type: "", description: "" });
    setEditIndex(null);
    setShowForm(true);
  };

  const handleInputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editIndex != null) {
      // editTask(editTask, formData)
      dispatch(editTask({ index: editIndex, updatedTask: formData }));
    } else {
      dispatch(addTask(formData));
    }

    setFormData({ name: "", type: "", description: "" });
    setShowForm(false);
    setEditIndex(null);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setFormData(tasks[index]);
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
    setEditIndex(null);
  };

  return (
    <div className="addTask-container">
      <div className="name-btn-container">
        <h2>Task Management</h2>

        <button className="addTask-btn" onClick={handleAddTaskClick}>
          Add Task
        </button>
      </div>

      {showForm && (
        <div className="modal-container-addTask">
          <div className="modal-content-addTask">
            <h3>{editIndex !== null ? "Edit Task" : "Add New Task"}</h3>
            <form onSubmit={handleSubmit} className="addTask-form">
              <div className="first-input-add">
                <input
                  type="text"
                  className="addTask-input"
                  name="name"
                  placeholder="Task Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                {/* <input
                  type="text"
                  className="addTask-input"
                  name="type"
                  placeholder="Task Type"
                  value={formData.type}
                  onChange={handleInputChange}
                /> */}

                <select
                  className="addTask-input"
                  name="type"
                  placeholder="Task Type"
                  value={formData.type}
                  onChange={handleInputChange}
                >
                  <option value="">Select</option>
                  {Object.entries(taskTypeCategories).map(
                    ([category, types], index) => (
                      <optgroup className="" key={index} label={category}>
                        {types.map((option, index) => (
                          <option key={index} value={option}>
                            {option}{" "}
                          </option>
                        ))}
                      </optgroup>
                    )
                  )}
                </select>
              </div>
              <textarea
                name="description"
                className="addTask-input"
                placeholder="Task Description"
                value={formData.description}
                onChange={handleInputChange}
                cols="28"
                rows={5}
              />
              <div className="modal-buttons">
                <button type="submit" className="addTask-submit">
                  {editIndex !== null ? "Update Task" : "Submit Task"}
                </button>
                <button
                  type="button"
                  className="addTask-cancel"
                  onClick={closeForm}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="task-list">
        {tasks.length === 0 ? (
          <table className="task-table">
            <thead>
              <tr className="border-head">
                <th>Sr No</th>
                <th>Task Name</th>
                <th>Task Type</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>No Tasks</td>
                <td>No Tasks</td>
                <td>No Tasks</td>
                <td>No Tasks</td>
              </tr>
            </tbody>
          </table>
        ) : (
          <table className="task-table">
            <thead>
              <tr className="border-head">
                <th>Sr No</th>
                <th>Task Name</th>
                <th>Task Type</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task, index) => (
                <tr
                  key={index}
                  onClick={() => handleEdit(index)}
                  className="table-row"
                >
                  <td>{index + 1 || "No Tasks"}</td>
                  <td>{task.name || "No Tasks"}</td>
                  <td>{task.type || "No Tasks"}</td>
                  <td>{task.description || "No Tasks"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default AddTask;
