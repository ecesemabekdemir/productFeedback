"use client";

import "./reply.css";

export default function Reply({ show }) {
  return (
    <div className="replyContainer">
      <div className="reply">
        {show && (
          <form action="" id="addReply" className="form-group-reply">
            <textarea
              name="description"
              className="addCommentTextarea"
              placeholder="Type your comment here"
            ></textarea>
            <div className="addReplyBtn">
              <button>Post Reply</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
