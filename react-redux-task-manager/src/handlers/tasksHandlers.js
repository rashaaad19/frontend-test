import { toast } from "react-toastify";
import { addTask, removeTask, setFilter, updateTask } from "../redux/tasksSlice";

export const handleAddTask = (event, dispatch) => {
    event.preventDefault();
    const form = event.target
    const formData = new FormData(event.target);
    const taskName = formData.get("task-name");
    const taskPriority = formData.get("task-priority");
    if (!taskName) return;
    console.log("Task added:", taskName);
    dispatch(addTask({
        id: Date.now(),
        title: taskName,
        priority: taskPriority,
        completed: false
    }));
    form.reset();
    toast.success("Task Added successfully!");

};

export const handleEditTask = (event, dispatch, id) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const taskTitle = formData.get("title");
    const taskPriority = formData.get("priority");
    const taskCompleted = formData.get("completed");

    console.log(taskTitle, taskPriority, taskCompleted)
    if (!taskTitle) return;

    dispatch(updateTask({
        id: id,
        title: taskTitle,
        priority: taskPriority,
    }));
    document.getElementById("my_edit_modal").close();
    toast.info("Task updated successfully!");

}

export const handleRemoveTask = (dispatch, id) => {
    dispatch(removeTask({ id: id }));
    toast.error("Task removed successfully!");
}

export const handleSetFilter = (dispatch, filter) => {
    dispatch(setFilter(filter));
}