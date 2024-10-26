"use client";
import { useState } from "react";
import ModalEdit from "../modal/modalEdit";
import "./editFeedbackButton.css";

export default function EditFeedbackButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }
  return (
    <>
      <div className="editFeedbackButton">
        <button className="editModalBtn" onClick={openModal}>Edit Feedback</button>
        <ModalEdit isModalOpen={isModalOpen} closeModal={closeModal} />
      </div>
    </>
  );
}
