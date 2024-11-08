"use client";
import { useState } from "react";
import "./btn.css";
import ModalAdd from "../modal/modalAdd";

export default function AddFeedbackButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        <ModalAdd isModalOpen={isModalOpen} closeModal={closeModal} />
      </div>
    </>
  );
}
