const CheckBox = ({ index: checkIndex, checkBoxClick, state }) => {
  return (
    <div className="flex justify-center items-center">
      <input
        type="checkbox"
        className="h-10 aspect-square"
        checked={state}
        onClick={() => checkBoxClick(checkIndex)}
      />
    </div>
  );
};

export default CheckBox;
