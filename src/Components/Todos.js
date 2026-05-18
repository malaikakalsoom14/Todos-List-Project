import React, { useState } from 'react'
import { TodoItem } from "./TodoItem"

export const Todos = (props) => {

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();

    if (!title || !desc) {
      alert("Please fill all fields");
    }

    else {
      props.addTodo(title, desc);
      setTitle("");
      setDesc("");
    }
  }
return (

 <div
      className="container my-5 p-5"
      style={{
        background: "linear-gradient(to right, white, white)",
        borderRadius: "25px",
        boxShadow: "0px 4px 15px black"
      }}
    >

      <h1
        className="text-center mb-4"
        style={{
          color: "indigo",
          fontWeight: "bold"
        }}
      >
        🌸 My Todos List 🌸
      </h1>

     

  <form onSubmit={submit}>

    <input
      type="text"
     placeholder="Enter Task Title..."
      className="form-control mb-3 p-3"
      value={title}
    onChange={(e) => setTitle(e.target.value)}
    style={{
     borderRadius: "12px"
    }}
   />

  <textarea
     placeholder="Enter Task Description..."
  className="form-control mb-3 p-3"
  rows="3"
  value={desc}
   onChange={(e) => setDesc(e.target.value)}
   style={{
    borderRadius: "12px"
     }}
  ></textarea>

 <button
className="btn w-100 mb-4"
 style={{
 backgroundColor: "#ff66a3",
 color: "white",
   border: "none",
 padding: "12px",
   borderRadius: "12px",
 fontWeight: "bold"
   }}
   >
   Add Task
   </button>

</form>

 <h3
  className="text-center mb-4"
   style={{
    color: "darkpink"
    }}
   >
    ✨ My Tasks ✨
      </h3>

  {
   props.todos.length === 0 ?

  <h5 className="text-center">
   No Tasks Available
  </h5>

  :
props.todos.map((todo) => {
return (
<TodoItem
todo={todo}
key={todo.sno}
 onDelete={props.onDelete}
  onEdit={props.onEdit}
  />
   )
  })}
      

</div>
  )
}