import React from "react";
import EditTaskForm from "./EditTaskForm";

const EditModal = ({ task }) => {
  return (
    <>
      <dialog id="my_edit_modal" className="modal">
        <div className="modal-box">
          <EditTaskForm task={task} />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default EditModal;
