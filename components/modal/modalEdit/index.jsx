"use client";

export default function ModalEdit({ isModalOpen, closeModal }) {
  return (
    <div>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-container">
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
              </div>
              <div className="modal-buttons">
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
