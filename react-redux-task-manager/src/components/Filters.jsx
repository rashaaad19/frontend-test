import React from "react";
import { handleSetFilter } from "../handlers/tasksHandlers";
import { useDispatch } from "react-redux";

const Filters = () => {
  const dispatch = useDispatch();
  return (
    <div className=" my-8  mx-auto w-[90%] sm:w-xl font-bold  text-gray-700">
      <h1 className="text-lg mb-2 ">Filter by priority: </h1>
      <form className="filter">
        <input
          onClick={() => handleSetFilter(dispatch, "all")}
          className="btn btn-square"
          type="reset"
          value="×"
        />
        <input
          className="btn"
          type="radio"
          name="priority"
          aria-label="High"
          onClick={() => handleSetFilter(dispatch, "High")}
        />
        <input
          className="btn"
          type="radio"
          name="priority"
          aria-label="Medium"
          onClick={() => handleSetFilter(dispatch, "Medium")}
        />
        <input
          className="btn"
          type="radio"
          name="priority"
          aria-label="Low"
          onClick={() => handleSetFilter(dispatch, "Low")}
        />
      </form>
    </div>
  );
};

export default Filters;
