"use client";
import GoBack from "@/components/goBack";
import "@/components/modal/modal.css"
import ModalKapatmaSvg from "@/svgs/modal-kapatma";

export default function ModalEdit({ isModalOpen, closeModal }) {
  return (
    <div>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-container">
          <button className="closeModalBtn" onClick={closeModal}> <ModalKapatmaSvg /></button> 
            <h2>Editing ‘Add a dark theme option’</h2>
            <form id="editForm">
              <div className="form">
                <div className="form-group">
                  <label>Feedback Title</label>
                  <p>Add a short, descriptive headline</p>
                  <input
                    type="text"
                    name=""
                    placeholder="Please add a dark theme option"
                    required
                  />
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
                  <label>Update Status</label>
                  <p>Change feedback state</p>
                  <select name="" id="">
                    <option value="">Planned</option>
                    <option value="">In-Progress</option>
                    <option value="">Live</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Feedback Detail</label>
                  <p>
                    Include any specific comments on what should be improved,
                    added, etc.
                  </p>
                  <textarea type="text" name="" required />
                </div>
              </div>
              <div className="buttons">
                <button type="button" className="delete-btn">
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
