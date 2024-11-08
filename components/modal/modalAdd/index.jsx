"use client";

import "../modal.css";
import ModalKapatmaSvg from "@/svgs/modal-kapatma";
import { getFeedbacks, postFeedback } from "@/utils/feedbackService";
import { useState } from "react";

export default function ModalAdd({ isModalOpen, closeModal }) {
  // const [error, setError] = useState(null); // error state
  const [loading, setLoading] = useState(false); // loading state

  // const action = async (formData) => {
  //   try {
  //     setLoading(true);
  //     const formObj = {};
  //     formData.forEach((value, key) => {
  //       formObj[key] = value; // Form verisini nesneye dönüştür
  //     });
  //     const response = await postFeedback(formObj);

  //     if (response?.error) {
  //       setError(response.error); // Hata varsa setError ile göster
  //       return; // Eğer hata varsa durdur
  //     }

  //     console.log("Feedback başarılı:", response);
  //     closeModal(); // Modal'ı kapat
  //     getFeedbacks(); // Verileri yeniden yükle
  //   } catch (err) {
  //     console.error("Feedback gönderilirken hata:", err);
  //     setError("Geri bildirim gönderilemedi");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setError(null); // Hata mesajını sıfırlıyoruz

  //   const formData = new FormData(e.target); // Form verisini al

  //   // Formu işleyip action fonksiyonuna gönderiyoruz
  //   await action(formData);
  // };

  return (
    <div>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-container">
            <button className="closeModalBtn" onClick={closeModal}>
              <ModalKapatmaSvg />
            </button>
            <h2>Create New Feedback</h2>
            {/* 
            {error && <p className="error-message">{error}</p>} */}

            <form action={postFeedback} id="AddForm">
              <div className="form">
                <div className="formGroup">
                  <label htmlFor="title">Feedback Title</label>
                  <p>Add a short, descriptive headline</p>
                  <input type="text" name="title" required />
                </div>
                <div className="formGroup">
                  <label htmlFor="category">Category</label>
                  <p>Choose a category for your feedback</p>
                  <select name="category" required>
                    <option value="15">Feature</option>
                    <option value="13">Enhancement</option>
                    <option value="11">UI</option>
                    <option value="12">UX</option>
                    <option value="14">Bug</option>
                  </select>
                </div>
                <div className="formGroup">
                  <label htmlFor="description">Feedback Detail</label>
                  <p>
                    Include any specific comments on what should be improved,
                    added, etc.
                  </p>
                  <textarea name="description" required />
                </div>
                <input type="hidden" name="CategoryName" />
              </div>
              <div className="buttons">
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={closeModal}
                >
                  Cancel
                </button>
                <button type="submit" className="save-btn" disabled={loading}>
                  {loading ? "Sending..." : "Add Feedback"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
