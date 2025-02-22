"use client";
import { CompleteToDoAction, DeleteToDoAction } from "@/actions/ToDoActions";
import React, { useActionState } from "react";
import { RxCross2 } from "react-icons/rx";

const ToDoItem = ({
  id,
  name,
  date,
  completed,
}: {
  id: string;
  name: string;
  date: string;
  completed: boolean;
}) => {
  const [completeData, completeAction, isPendingComplete] = useActionState(
    CompleteToDoAction,
    undefined
  );
  const [deleteData, deleteAction, isPendingDelete] = useActionState(
    DeleteToDoAction,
    undefined
  );

  return (
    <div className="m-2 w-11/12 p-2 group rounded-md bg-primary text-center flex justify-between hover:shadow-md font-mono text-primary-content">
      <form action={completeAction}>
        <input value={id} type="hidden" name="todoid" />
        <input value={date} type="hidden" name="date" />
        {completed ? (
          <button className="line-through" type="submit">
            {name}
          </button>
        ) : (
          <button type="submit">{name}</button>
        )}
      </form>
      <form className="flex" action={deleteAction}>
        <button
          type="submit"
          className="opacity-0 transition-opacity group-hover:opacity-100"
        >
          <input value={id} type="hidden" name="todoid" />
          <input value={date} type="hidden" name="date" />
          <RxCross2 className="text-2xl text-accent hover:text-accent/80 font-bold" />
        </button>
      </form>
    </div>
  );
};

export default ToDoItem;
