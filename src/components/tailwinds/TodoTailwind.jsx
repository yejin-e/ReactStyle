import { useState } from "react";
import Input from "./todo/Input";
import List from "./todo/List";

const TodoTailwind = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("투두리스트 만들기!");

  const checkBoxClick = (checkIndex) => {
    let changeTodos = [...todos];
    changeTodos[checkIndex].state = changeTodos[checkIndex].state
      ? false
      : true;
    setTodos(changeTodos);
  };

  const deleteClick = (deleteIndex) => {
    let changeTodos = [...todos];
    changeTodos.splice(deleteIndex, 1);
    setTodos(changeTodos);
  };

  return (
    <div className="flex flex-col gap-10 w-1/2 h-dvh my-0 mx-auto p-10 bg-blue-100">
      <Input
        inputValue={inputValue}
        setInputValue={setInputValue}
        setTodos={setTodos}
      />
      <List
        todos={todos}
        checkBoxClick={checkBoxClick}
        deleteClick={deleteClick}
      />
    </div>
  );
};

export default TodoTailwind;
