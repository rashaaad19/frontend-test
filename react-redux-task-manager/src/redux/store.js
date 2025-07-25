import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./tasksSlice";

//* Load persisted state from localStorage
const loadFromLocalStorage = () => {
  try {
    const tasksData = localStorage.getItem("tasks");
    return tasksData
      ? {
          tasksSlice: {
            items: JSON.parse(tasksData),
            currentFilter: "all", 
          },
        }
      : undefined;
  } catch (e) {
    console.warn("Could not load tasks from localStorage", e);
    return undefined;
  }
};

//* Save state to localStorage
const saveToLocalStorage = (state) => {
  try {
    const serializedTasks = JSON.stringify(state.tasksSlice.items);
    localStorage.setItem("tasks", serializedTasks);
  } catch (e) {
    console.warn("Could not save tasks to localStorage", e);
  }
};

const store = configureStore({
  reducer: {
    tasksSlice: tasksReducer,
  },
  preloadedState: loadFromLocalStorage(),
});

//* Subscribe to store changes
store.subscribe(() => {
  saveToLocalStorage(store.getState());
});

export default store;
