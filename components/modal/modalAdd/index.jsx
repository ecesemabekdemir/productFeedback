"use client";
import "../modal.css";
import ModalKapatmaSvg from "@/svgs/modal-kapatma";

export default function ModalAdd({ isModalOpen, closeModal }) {
  return (
    <div>
      {isModalOpen && (
        <>
          <div className="modal-overlay">
            <div className="modal-container">
               <button className="closeModalBtn" onClick={closeModal}> <ModalKapatmaSvg /></button> 
              <h2>Create New Feedback</h2>

              <form id="AddForm">
                <div className="form">
                  <div className="form-group">
                    <label>Feedback Title</label>
                    <p>Add a short, descriptive headline</p>
                    <input type="text" name="title" required />
                  </div>
                  <div className="form-group">
                    <label>Category</label>
                    <p>Choose a category for your feedback</p>
                    <select name="" id="">
                      <option value="">Feature</option>
                      <option value="">Enhancement</option>
                      <option value="">All</option>
                      <option value="">UI</option>
                      <option value="">UX</option>
                      <option value="">Bug</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Feedback Detail</label>
                    <p>
                      Include any specific comments on what should be improved,
                      added, etc.
                    </p>
                    <textarea type="text" name="description" required />
                  </div>
                </div>
                <div className="buttons">
                  <button
                    type="button"
                    className="cancel-btn"
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
        </>
      )}
    </div>
  );
}
