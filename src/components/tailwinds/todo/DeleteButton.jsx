const DeleteButton = ({ index: deleteIndex, deleteClick }) => {
  return (
    <button
      className="flex justify-center items-center aspect-square text-2xl text-blue-400 hover:text-red-500"
      onClick={() => deleteClick(deleteIndex)}
    >
      <div>X</div>
    </button>
  );
};

export default DeleteButton;
