import React from "react";
import { FaEdit, FaTrash, FaSave } from "react-icons/fa";

const Notelist = ({ items, removeItem, editItem, saveItem }) => {
  return (
    <div className="note-list">
      {items.map((item) => {
        const { id, title, description, category } = item;
        return (
          <article key={id} className="note-item">
            <p className="description">{description} </p>
            <p className="title">{title}</p>
            <p className="category">{category}</p>
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

export default Notelist;
