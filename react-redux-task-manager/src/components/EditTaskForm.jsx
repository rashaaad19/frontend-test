import { useDispatch } from "react-redux";
import { handleEditTask } from "../handlers/tasksHandlers";

const EditTaskForm = ({ task }) => {
  const dispatch = useDispatch();

  //* Return nothing if no task is selected to be editted
  if (!task) return null;
  
  return (
    <div className="flex gap-5 flex-col  ">
      <h2 className="text-xl px-6 font-semibold text-left  mb-4 ">
        Editting <span className="text-secondary">"{task.title}"</span>
      </h2>

      <form
        onSubmit={(event) => {
          handleEditTask(event, dispatch, task.id);
        }}
        className=" p-6 rounded-lg  w-full max-w-md space-y-4"
      >
        <div>
          <label className="label font-medium">Task Title</label>
          <input
            defaultValue={task.title}
            type="text"
            placeholder="Enter task title"
            className="input input-bordered w-full"
            name="title"
          />
        </div>

        <div>
          <label className="label font-medium">Priority</label>
          <select
            name="priority"
            defaultValue={task.priority}
            className="select select-bordered w-full"
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>

        <div>
          <button className="btn btn-primary w-full">Save Changes</button>
        </div>
      </form>
    </div>
  );
};

export default EditTaskForm;
