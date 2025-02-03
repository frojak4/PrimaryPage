import React from "react";

const AddHabitModal = () => {
  return (
    <div className="w-96 m-8 min-h-[25rem] max-h-[25rem] border-2 border-darkGray bg-gray rounded-xl flex flex-col shadow-lg overflow-auto">
      <p className="p-4 font-bold">Add a new habit</p>
      <p className="pl-12">Name:</p>
      <input
        className="bg-lightestGray w-4/5 mx-auto rounded-xl p-2"
        name="habit"
        type="text"
      />
    </div>
  );
};

export default AddHabitModal;
