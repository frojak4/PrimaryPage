"use server";

import { auth } from "@/auth";
import client from "@/lib/db";
import { ObjectId } from "mongodb";
import { revalidateTag } from "next/cache";

export const CompleteToDoAction = async (
  previousState: unknown,
  formData: FormData
) => {
  const session = await auth();

  if (!session) return;

  if (!session.user) return;

  const userId = session.user.id;
  const taskId = formData.get("todoid") as string;
  const date = formData.get("date") as string;

  const db = client.db("PermDash");

  try {
    await db.collection("tasks").updateOne({ _id: new ObjectId(taskId) }, [
      {
        $set: {
          completed: { $eq: ["$completed", false] }, // If completed is false, set it to true, and vice versa
        },
      },
    ]);
  } catch (e) {
    console.log(e);
    return { success: false };
  } finally {
    revalidateTag(`todo-${userId}-${date}`);
  }
};

export const DeleteToDoAction = async (
  previousState: unknown,
  formData: FormData
) => {
  const session = await auth();

  if (!session) return;

  if (!session.user) return;

  const userId = session.user.id;
  const taskId = formData.get("todoid") as string;
  const date = formData.get("date") as string;

  try {
    const db = client.db("PermDash");
    db.collection("tasks").deleteOne({
      _id: new ObjectId(taskId),
    });
  } catch (e) {
    console.log(e);
    return { success: false };
  } finally {
    revalidateTag(`todo-${userId}-${date}`);
  }
  return { success: true };
};

export const AddTodoAction = async (
  previousState: unknown,
  formData: FormData
) => {
  const session = await auth();

  if (!session) return;

  if (!session.user) return;

  const userId = session.user.id;
  const Todo = formData.get("task");
  const date = new Date().toISOString().split("T")[0];

  console.log(`Added todo: ${Todo}`);

  try {
    const db = client.db("PermDash");
    await db.collection("tasks").insertOne({
      userId,
      name: Todo,
      date,
      completed: false,
    });
  } catch (e) {
    return { success: false };
  } finally {
    revalidateTag(`todo-${userId}-${date}`);
  }

  return { success: true };
};
