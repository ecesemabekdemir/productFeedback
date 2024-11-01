"use client";
import { postFeedback } from "@/utils/feedbackService";
import "../modal.css";
import ModalKapatmaSvg from "@/svgs/modal-kapatma";
import { useState } from "react";

export default function ModalAdd({ isModalOpen, closeModal }) {
  const [formData, setFormData] = useState({
    title: "",
    category: "Feature",
    description: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await postFeedback(formData); // fedback gönder
      console.log("başarılı eklendi.");
      closeModal();
    } catch (error) {
      console.error("eklenemedi:", error);
    }
  }

  return (
    <div>
      {isModalOpen && (
        <>
          <div className="modal-overlay">
            <div className="modal-container">
              <button className="closeModalBtn" onClick={closeModal}>
                <ModalKapatmaSvg />
              </button>
              <h2>Create New Feedback</h2>

              <form onSubmit={handleSubmit} id="AddForm">
                <div className="form">
                  <div className="formGroup">
                    <label>Feedback Title</label>
                    <p>Add a short, descriptive headline</p>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="formGroup">
                    <label>Category</label>
                    <p>Choose a category for your feedback</p>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                    >
                      <option value="Feature">Feature</option>
                      <option value="Feature">Feature</option>
                      <option value="Feature">Feature</option>
                      <option value="UI">UI</option>
                      <option value="UX">UX</option>
                      <option value="Bug">Bug</option>
                    </select>
                  </div>
                  <div className="formGroup">
                    <label>Feedback Detail</label>
                    <p>
                      Include any specific comments on what should be improved,
                      added, etc.
                    </p>
                    <textarea
                      type="text"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="buttons">
                  <button type="button" className="cancel-btn">
                    Cancel
                  </button>
                  <button type="submit" className="save-btn">
                    Add Feedback
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
