const CheckBox = ({ index: checkIndex, checkBoxClick, state }) => {
  return (
    <div className="flex justify-center">
      <input
        type="checkbox"
        className="h-full aspect-square"
        checked={state}
        onClick={() => checkBoxClick(checkIndex)}
      />
    </div>
  );
};

export default CheckBox;
