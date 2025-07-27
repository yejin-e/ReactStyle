const DeleteButton = ({ index: deleteIndex, deleteClick }) => {
  return (
    <button
      className="relative flex justify-center items-center aspect-square text-xl text-blue-400 hover:text-red-500"
      onClick={() => deleteClick(deleteIndex)}
    >
      <div className="h-7 aspect-square after:content-['\00d7']"></div>
    </button>
  );
};

export default DeleteButton;
