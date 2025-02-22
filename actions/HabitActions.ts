"use server";
export const CompletedHabit = async (
  previousState: unknown,
  formData: FormData
) => {
  const habitID = formData.get("habitID") as string;

  console.log(`Completed habit ${habitID}`);
};
