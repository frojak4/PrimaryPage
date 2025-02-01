import React from "react";
import ToDoForm from "./ToDoForm";
import ToDoItem from "./ToDoItem";

const ToDoContainer = () => {
  return (
    <div className="w-80 m-8 min-h-[30rem] max-h-[30rem] border-2 border-darkGray bg-gray rounded-xl flex flex-col items-center shadow-lg overflow-auto">
      <ToDoForm />
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
    </div>
  );
};

export default ToDoContainer;
