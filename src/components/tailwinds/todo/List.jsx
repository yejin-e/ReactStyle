import DeleteButton from "./DeleteButton";
import CheckBox from "./CheckBox";
import Item from "./Item";

const List = ({ todos, checkBoxClick, deleteClick }) => {
  return (
    <div className="flex flex-col flex-1 w-full gap-3">
      {todos.map((todo, index) => {
        return (
          <div className="flex flex-row gap-3" key={index}>
            <CheckBox
              state={todo.state}
              index={index}
              checkBoxClick={checkBoxClick}
            />
            <Item todo={todo} index={index} deleteClick={deleteClick} />
            {/* <DeleteButton index={index} deleteClick={deleteClick} /> */}
          </div>
        );
      })}
    </div>
  );
};

export default List;
