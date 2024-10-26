import "./commentCard.css";

export default function CommentCard() {
  return (
    <div className="commentCardContainer">
      <div className="commentCard">
        <div className="commentHeader">
          <div className="namebox">
            <p>Elijah Moss</p>
            <p>@hexagon.bestagon</p>
          </div>
          <button>Reply</button>
        </div>
        <div className="commentContent">
          <p>
            Also, please allow styles to be applied based on system preferences.
            I would love to be able to browse Frontend Mentor in the evening
            after my device’s dark mode turns on without the bright background
            it currently has.
          </p>
        </div>
      </div>
    </div>
  );
}
