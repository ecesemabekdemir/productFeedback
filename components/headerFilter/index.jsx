"use client";
import "./headerFilter.css";

export default function HeaderFilter() {
  return (
    <div className="headerFilter">
      <p>Sort by : </p>
      <select>
        <option value="">Most Upvotes</option>
        <option value="">Least Upvotes</option>
        <option value="">Most Comments</option>
        <option value="">Least Comments</option>
      </select>
    </div>
  );
}
