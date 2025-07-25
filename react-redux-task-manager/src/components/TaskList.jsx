import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";
import { useState } from "react";
import EditModal from "./EditModal";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasksSlice.items);
  const currentFilter = useSelector((state) => state.tasksSlice.currentFilter);
  const [selectedTask, setSelectedTask] = useState(null);
  
  const handleEditSelect = (id) => {
    setSelectedTask(id);
    document.getElementById("my_edit_modal").showModal();
  };

  console.log(currentFilter)
  const displayedTasks = currentFilter==='all'
    ? tasks
    : tasks.filter((task) => task.priority === currentFilter);
  return (
    <div className="max-w-xl mx-auto mt-10 space-y-4">
      <EditModal task={selectedTask} />

      {displayedTasks.map((task) => (
        <TaskItem
          title={task.title}
          key={task.id}
          id={task.id}
          priority={task.priority}
          status={task.completed}
          handleEditSelect={handleEditSelect}
        />
      ))}
    </div>
  );
};
export default TaskList;
