import React from "react";
import ToDoForm from "./ToDoForm";
import ToDoItem from "./ToDoItem";

const ToDoContainer = () => {
  return (
    <div className="w-80 min-h-[30rem] border-2 border-darkGray bg-gray rounded-xl flex flex-col items-center shadow-lg">
      <ToDoForm />
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
    </div>
  );
};

export default ToDoContainer;
