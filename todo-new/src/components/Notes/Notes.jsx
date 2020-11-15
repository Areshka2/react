import React from "react";

const Notes = ({ notes, onRemove }) => {
  return (
    <ul className="list-group">
      {notes
        .map((note) => (
          <li className="list-group-item note" key={note.id}>
            <div>
              <strong>{note.title}</strong>
              <small>{new Date(note.date).toLocaleString()}</small>
            </div>
            <button
              type="button"
              className="btn btn-outline-danger btn-sm"
              onClick={() => onRemove(note.id)}
            >
              &times;
            </button>
          </li>
        ))
        .reverse()}
    </ul>
  );
};

export default Notes;
