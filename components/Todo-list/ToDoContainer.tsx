import React from "react";
import ToDoForm from "./ToDoForm";
import ToDoItem from "./ToDoItem";
import client from "@/lib/db";

const ToDoContainer = async ({
  userId,
  date,
}: {
  userId: string;
  date: string;
}) => {
  const db = await client.db("PermDash");

  const tasks = await db
    .collection("tasks")
    .find({ userId: userId, date: date })
    .sort({ completed: 1 })
    .toArray();

  return (
    <div className="w-80 m-8 min-h-[30rem] max-h-[30rem] border-2 border-secondary bg-base-300 rounded-xl flex flex-col items-center shadow-lg overflow-auto order-3 md:order-none">
      <ToDoForm />
      {tasks.length === 0 ? (
        <h3 className="text-error-content">No tasks found</h3>
      ) : (
        tasks.map((task) => {
          return (
            <ToDoItem
              key={task._id.toString()}
              id={task._id.toString()}
              name={task.name}
              date={task.date}
              completed={task.completed}
            />
          );
        })
      )}
    </div>
  );
};

export default ToDoContainer;
