import React from "react";

const AddHabitModal = () => {
  return (
    <div className="w-96 m-8 min-h-[25rem] max-h-[25rem] border-2 border-secondary bg-neutral rounded-xl flex flex-col shadow-lg overflow-auto">
      <p className="p-4 font-bold">Add a new habit</p>
      <p className="pl-12">Name:</p>
      <input
        className="bg-base-300 w-4/5 mx-auto rounded-xl p-2 text-base-content"
        name="habit"
        type="text"
      />
    </div>
  );
};

export default AddHabitModal;
