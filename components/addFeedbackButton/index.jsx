"use client";
import { useState } from "react";
import "./btn.css";
import ModalAdd from "../modal/modalAdd";

export default function AddFeedbackButton({ feedbackData, handleAddFeedback }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [feedbacks, setFeedbacks] = useState(feedbackData);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <>
      <div className="addFeedbackButton">
        <button onClick={openModal}>+ Add Feedback</button>
        <ModalAdd
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          handleAddFeedback={handleAddFeedback}
        />
      </div>
    </>
  );
}
