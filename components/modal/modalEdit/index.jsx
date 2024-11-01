"use client";

import "@/components/modal/modal.css";
import ModalKapatmaSvg from "@/svgs/modal-kapatma";
import { deleteFeedback, updateFeedback } from "@/utils/feedbackService";
import { useEffect, useState } from "react";

export default function ModalEdit({ isModalOpen, closeModal, feedbackData }) {
  const [formData, setFormData] = useState({
    title: "",
    category: "Feature",
    status: "Planned",
    description: "",
  });
  useEffect(() => {
    if (isModalOpen && feedbackData) {
      setFormData({
        title: feedbackData.title || "",
        category: feedbackData.category || "Feature",
        status: feedbackData.status || "Planned",
        description: feedbackData.description || "",
      });
    }
  }, [isModalOpen, feedbackData]);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await updateFeedback({ ...formData, id: feedbackData.id }); // güncelle
      console.log(" güncellendi.");
      closeModal();
    } catch (error) {
      console.error(" hatalı:", error);
    }
  }

  async function handleDelete() {
    if (!feedbackData || !feedbackData.id) {
      return;
    }
    try {
      await deleteFeedback(feedbackData.id); // silincek olan  feebackin idsini alıyoruz
      console.log("silindi");
      closeModal();
    } catch (error) {
      console.error("slinemedi", error);
    }
  }

  return (
    <div>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-container">
            <button className="closeModalBtn" onClick={closeModal}>
              <ModalKapatmaSvg />
            </button>
            <h2>Editing ‘Add a dark theme option’</h2>
            <form id="editForm" onSubmit={handleSubmit}>
              <div className="form">
                <div className="form-group">
                  <label>Feedback Title</label>
                  <p>Add a short, descriptive headline</p>
                  <input
                    type="text"
                    name="title"
                    placeholder="Please add a dark theme option"
                    required
                    value={formData.title}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Category</label>
                  <p>Choose a category for your feedback</p>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                  >
                    <option value="Feature">Feature</option>
                    <option value="Enhancement">Enhancement</option>
                    <option value="All">All</option>
                    <option value="UI">UI</option>
                    <option value="UX">UX</option>
                    <option value="Bug">Bug</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Update Status</label>
                  <p>Change feedback state</p>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                  >
                    <option value="Planned">Planned</option>
                    <option value="In-Progress">In-Progress</option>
                    <option value="Live">Live</option>
                  </select>
                </div>
                <div className="form-group">
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
                <button
                  type="button"
                  className="delete-btn"
                  onClick={handleDelete}
                >
                  Delete
                </button>
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={closeModal}
                >
                  Cancel
                </button>
                <button type="submit" className="save-btn">
                  Add Feedback
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
