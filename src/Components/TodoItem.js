import React, { useState } from 'react'

export const TodoItem = ({ todo, onDelete, onEdit }) => {

  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);
  const [newDesc, setNewDesc] = useState(todo.description);

  const handleSave = () => {
    onEdit(todo.sno, newTitle, newDesc);
    setIsEditing(false);
  }
return (
  <div
    className="my-4 p-4"
    style={{
    backgroundColor: "white",
    borderRadius: "18px",
    boxShadow: "0px 4px 12px black"
  }}
    >
{
 isEditing ? (
 <>
  <input
    type="text"
     className="form-control mb-3"
       value={newTitle}
     onChange={(e) => setNewTitle(e.target.value)} />
            
 <textarea
     className="form-control mb-3"
     rows="3"
    value={newDesc}
    onChange={(e) => setNewDesc(e.target.value)} ></textarea>
            
<button
   className="btn me-2"
   style={{
        backgroundColor: "darkpink",
    color: "white",
       border: "none"
   }}
    onClick={handleSave}
      >
    Save </button>
 </>
          
 ) : (
 <>
     <h4 style={{ color: "palevioletred" }}>
     {todo.title}
      </h4>

   <p style={{ color: "gray" }}>
    {todo.description}
    </p>

   <button
 className="btn me-2"
    style={{
  backgroundColor: "purple",
   color: "white",
    border: "none"
    }}
    onClick={() => setIsEditing(true)}
       >
      Edit
   </button>

   <button
   className="btn"
   style={{
   backgroundColor: "red",
   color: "white",
  border: "none"
 }}
  onClick={() => onDelete(todo)}
            >
       Delete
  </button>
          </>
        )
      }

    </div>
  )
}