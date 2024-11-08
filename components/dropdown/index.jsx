import { useState } from "react";
import "./dropdown.css";

export default function DropdownProfile({user, handleLogout}) {
  const [show, setShow] = useState(false);

  return (
    <div className="dropdown">
      <button onClick={() => setShow(!show)} className="dropbtn">{user.data.firstName.charAt(0)}</button>
      {show && (
      <div className="dropdown-content">
        <p>Merhaba {user.data.firstName} </p>
        <hr />
        <button onClick={handleLogout}>Sign out</button>
      </div>
      )}
    </div>
  )
}