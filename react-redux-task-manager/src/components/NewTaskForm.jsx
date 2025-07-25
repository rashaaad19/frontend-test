import React from "react";
import { handleAddTask } from "../handlers/tasksHandlers";
import { useDispatch } from "react-redux";

const NewTaskForm = () => {
  const dispatch = useDispatch();

  return (
    <form
      className=" flex  flex-col sm:flex-row w-[90%] gap-5 justify-center border-1 border-gray-200 sm:w-xl mx-auto px-6 py-4 rounded-lg bg-base-100 shadow-md"
      onSubmit={(event) => {
        handleAddTask(event, dispatch);
      }}
    >
      <input
        required
        name="task-name"
        className="input input-primary"
        type="text"
        placeholder="Enter task title"
      />
      <select
        required
        name="task-priority"
        className="select select-primary w-32"
      >
        <option value={""} disabled={true}>
          Select priority
        </option>
        <option value={"High"}>High</option>
        <option value={"Medium"}>Medium</option>
        <option value={"Low"}>Low</option>
      </select>

      <button className="btn btn-primary rounded-4xl" type="submit">
        Add Task
      </button>
    </form>
  );
};

export default NewTaskForm;
