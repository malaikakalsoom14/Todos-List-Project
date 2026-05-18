import './App.css';
import Header from "./Components/Header";
import { Todos } from "./Components/Todos";
import { Footer } from "./Components/Footer";
import { useState } from "react";

function App() {

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "I wake up at 6am.",
      description: "I have to do some exercise before going to work."
    },
    {
      sno: 2,
      title: "I eat my breakfast at 7am.",
      description: "It keeps me energized for the day ahead."
    },
    {
      sno: 3,
      title: "I go to work at 8am.",
      description: "I have to be there on time to start my day productively."
    },
  ]);

  const onDelete = (todo) => {

    setTodos(
      todos.filter((e) => {
        return e !== todo;
      }));
  };

  const addTodo = (title, description) => {

    let sno;

    if (todos.length === 0) {
      sno = 1;
    }

    else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      description: description
    };

    setTodos([...todos, myTodo]);
  };

  const onEdit = (sno, newTitle, newDesc) => {
const updatedTodos = todos.map((todo) => {

   if (todo.sno === sno) {

     return {
          ...todo,
    title: newTitle,
    description: newDesc
   };
  }

  return todo;
    });

    setTodos(updatedTodos);
  };


  return (

    <div
      style={{
   minHeight: "100vh",
 background: "linear-gradient(to bottom, lightgray, lightpurple)"
  }}
>
 <Header
  title="Malaika's Todo List"
 searchBar={true}
 />

 <Todos
   todos={todos}
   onDelete={onDelete}
  addTodo={addTodo}
   onEdit={onEdit}
  />
  <Footer />

  </div>
  );
}

export default App;