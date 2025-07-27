import DeleteButton from "./DeleteButton";

const Item = ({ todo, index, deleteClick }) => {
  return (
    <div
      className={`${
        todo.state
          ? "bg-gray-400"
          : "bg-white border border-solid border-blue-300 "
      } flex flex-1 h-13 rounded-2xl`}
    >
      <div
        className={`${
          todo.state ? "line-through" : ""
        } flex flex-1 my-auto mx-3 items-center`}
      >
        {todo.text}
      </div>

      <DeleteButton index={index} deleteClick={deleteClick} />
    </div>
  );
};

export default Item;
