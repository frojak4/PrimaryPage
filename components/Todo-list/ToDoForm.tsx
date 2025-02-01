import React from "react";

const ToDoForm = () => {
  return (
    <form className="p-2 mb-4 border-b border-mutedmidgray flex justify-between w-11/12">
      <input
        type="text"
        name="task"
        className="p-2 bg-lightGray border border-red rounded-lg focus:bg-lightestGray focus:outline-none focus:ring-1 focus:ring-accent"
      />
      <button type="submit" className="bg-red hover:bg-red/80 px-2 rounded-md">
        Add
      </button>
    </form>
  );
};

export default ToDoForm;
