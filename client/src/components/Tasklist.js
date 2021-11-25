import React from "react";
import { FaEdit, FaTrash, FaSave } from "react-icons/fa";

const Tasklist = ({ items, removeItem, editItem, saveItem }) => {
  return (
    <div className="task-list">
      {items.map((item) => {
        const { id, title, length } = item;
        return (
          <article key={id} className="task-item">
            <p className="title">{title}</p>
            <p className="length">{length} minutes</p>
            <div className="btn-container">
              <button
                type="button"
                className="edit-btn"
                onClick={() => editItem(id)}
              >
                <FaEdit />
              </button>
              <button
                type="button"
                className="delete-btn"
                onClick={() => removeItem(id)}
              >
                <FaTrash />
              </button>
              <button
                type="button"
                className="save-btn"
                onClick={() => saveItem(id)}
              >
                <FaSave />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Tasklist;