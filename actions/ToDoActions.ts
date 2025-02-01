"use server";

export const CompleteToDoAction = async (
  previousState: unknown,
  formData: FormData
) => {
  console.log("completed action");
};

export const DeleteToDoAction = async (
  previousState: unknown,
  formData: FormData
) => {
  console.log("deleted action");
};
