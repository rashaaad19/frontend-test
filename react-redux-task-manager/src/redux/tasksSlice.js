import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasksSlice",
  initialState: {
    items: [], 
    currentFilter: "all",
  },
  reducers: {
    addTask: (state, action) => {
      state.items.push(action.payload);
    },
    removeTask: (state, action) => {
      state.items = state.items.filter(task => task.id !== action.payload.id);
    },
    updateTask: (state, action) => {
      const index = state.items.findIndex(task => task.id === action.payload.id); 
      if (index !== -1) {
        state.items[index] = { ...state.items[index], ...action.payload }; 
      }
    },
    toggleTask: (state, action) => {
      const index = state.items.findIndex(task => task.id === action.payload.id); 
      if (index !== -1) {
        state.items[index].completed = action.payload.completed; 
      }
    },
    setFilter: (state, action) => {
      state.currentFilter = action.payload;
    },
  },
});

export const {
  addTask,
  removeTask,
  updateTask,
  toggleTask,
  setFilter,
} = tasksSlice.actions;

export default tasksSlice.reducer;
