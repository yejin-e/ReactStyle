const Input = ({ inputValue, setInputValue, setTodos }) => {
  //input 타이핑시 화면에 보이게 하기
  const inputChange = (event) => {
    setInputValue(event.target.value);
  };

  //버튼 클릭시 이벤트
  const addButtonClick = () => {
    setTodos((prev) => {
      return [...prev, { text: inputValue, state: false }];
    });
    setInputValue("");
  };

  return (
    <div className="flex h-16 w-full gap-4 justify-end">
      <input
        className="flex-1 p-2 border border-solid bg-white border-blue-300 rounded-2xl focus:outline-red-300"
        value={inputValue}
        onChange={inputChange}
      />
      <button
        className="h-full aspect-square bg-amber-100 rounded-4xl border border-amber-300"
        onClick={addButtonClick}
      >
        +
      </button>
    </div>
  );
};

export default Input;
