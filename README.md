# Full Stack Developer Coding Test  

Welcome to the coding test for the **Full Stack Developer** role. This repository contains two challenges:  

1. **React Task Manager** (for web development).  
2. **React Native User List** (for mobile development).  

You are required to complete both tasks within the provided timeline. These challenges will assess your proficiency with React, React Native, Redux, and advanced development practices.  

---

## Repository Structure  

```plaintext
react-redux-task-manager/  
|-- README.md  
|-- react-task-manager/  
|   |-- src/  
|   |   |-- components/  
|   |   |-- redux/  
|   |   |-- App.js  
|   |   |-- index.js  
|   |-- package.json  
|-- react-native-user-list/  
|   |-- src/  
|   |   |-- components/  
|   |   |-- redux/  
|   |   |-- App.js  
|   |-- package.json  
|-- .gitignore```

---

## React Task Manager  

### Objective  
Build a task management application using React hooks and Redux.  

### Requirements  
1. **State Management (Redux):**  
   - Use Redux for global state to manage a list of tasks (id, title, priority, completed).

2. **React Hooks:**  
   - Use `useState`, `useEffect`, `useMemo`, and `useCallback`.  
   - Create a custom hook, `useFilteredTasks`, to filter tasks.  

3. **Features:**  
   - Add, edit, delete, and toggle task completion.  
   - Filter tasks by:  
     - Priority (`High`, `Medium`, `Low`).  
     - Completion status (`Completed`, `Incomplete`).  
   - Display task counts using `useMemo`.  
   - Persist tasks in `localStorage`.  

4. **UI Requirements:**  
   - Task list displaying the title, priority, and a toggle for completion status.  
   - Task form for adding or editing tasks.  
   - Filter section with dropdowns for priority and completion status.  

---

### Evaluation Criteria  
- Correct use of React hooks and Redux.  
- Code structure and readability.  
- Full functionality with filters, persistence, and editing.  

---

## React Native User List  

### Objective  
Build a user list application using EXPO, optimized for performance and scalability.  

### Requirements  
1. **State Management (Redux):**  
   - Manage user data fetched from the API.  

2. **API Integration:**  
   - Use `https://jsonplaceholder.typicode.com/users` to fetch user data.  
   - Store fetched users in Redux.
   - Implement offline support: Cache the fetched data using a library like AsyncStorage.

3. **FlatList Optimization:**  
   - Use FlatList to render a list of users.

4. **Features:**  
   - Display user data (`name`, `email`, `address`) in a reusable `UserCard`.  
   - Search bar to filter users by name.  
   - Pagination: Add a "Load More" button to fetch additional users.  

5. **Data Transformation:**  
   - Combine API `address` fields into a single string (`street, city, zipcode`).  
---

### Evaluation Criteria  
- Efficient use of `FlatList` and performance optimization.  
- Proper Redux and API integration.  
- Clean, reusable code for components like `UserCard`.  
- Bonus points for offline support.  

---

## Submission Instructions  

1. **Clone This Repository:**  
   Fork this repository and set up your environment.  

2. **Complete Both Challenges:**  
   Implement the tasks in the respective directories:  
   - `react-task-manager/`  
   - `react-native-user-list/`  

3. **Test Your Work:**  
   Ensure your projects run without errors and meet the requirements.  

4. **Submit Your Solution:**  
   Push your completed code to your public GitHub repository and share the link with us.  

---

### Timeline  
Both tasks must be completed within **2 days** of receiving this test.  

---

### Questions?  
If you have any questions or need clarification, feel free to reach out.  

Good luck! 🚀
