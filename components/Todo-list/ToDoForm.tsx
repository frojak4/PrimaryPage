"use client";
import { AddTodoAction } from "@/actions/ToDoActions";
import React, { useActionState } from "react";

const ToDoForm = () => {
  const [data, action, isPending] = useActionState(AddTodoAction, undefined);

  return (
    <form
      className="p-2 mb-4 border-b border-mutedmidgray flex justify-between w-11/12"
      action={action}
    >
      <input
        type="text"
        name="task"
        className="p-2 bg-lightGray border border-secondary rounded-lg focus:bg-lightestGray focus:outline-none focus:ring-1 focus:ring-accent"
      />
      <button
        type="submit"
        className="bg-primary hover:bg-primary/80 px-2 rounded-md font-mono"
        disabled={isPending}
      >
        Add
      </button>
    </form>
  );
};

export default ToDoForm;
