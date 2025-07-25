import React from "react";
import { useDispatch } from "react-redux";
import { toggleTask } from "../redux/tasksSlice";
import { handleRemoveTask } from "../handlers/tasksHandlers";

const TaskItem = ({ title, priority, status, id, handleEditSelect }) => {
  const dispatch = useDispatch();
  return (
    <div className="card bg-base-100 shadow-md border border-gray-300">
      <div className="card-body flex flex-row justify-between items-center gap-4">
        {/* Left side - Checkbox */}
        <input
          type="checkbox"
          defaultChecked={status}
          className="checkbox checkbox-xs"
          onChange={(event) =>
            dispatch(toggleTask({ id, completed: event.target.checked }))
          }
        />

        {/* Middle - Task content */}
        <div className="flex-1">
          <h2
            className={`card-title text-lg ${
              status === true ? "line-through text-gray-400" : ""
            }`}
          >
            {title}
          </h2>
          <p className="text-sm text-gray-500">
            Priority:{" "}
            <span
              className={`font-medium ${
                priority === "High"
                  ? "text-red-500"
                  : priority === "Medium"
                  ? "text-orange-300"
                  : "text-green-500"
              }`}
            >
              {priority}
            </span>
          </p>
        </div>

        {/* Right side - Action buttons */}
        <div className="flex gap-2">
          <button
            disabled={status} 
            className={`btn btn-circle border-0 outline-none ${
              status ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() =>
              //Pass the task item to the modal
              handleEditSelect({
                id: id,
                title: title,
                priority: priority,
                completed: status,
              })
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
              color="#4f46e5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
              />
            </svg>
          </button>

          <button className="btn btn-circle  border-0" onClick={()=>handleRemoveTask(dispatch, id)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
              color="#ef4444"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
