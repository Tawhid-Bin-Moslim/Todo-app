import Todo from "./Todo";
const TodoItems = ({ todoItems }) => {
  return (
    <div className="items-container ">
      {todoItems.map((item) => (
        <Todo TodoName={item.name} TodoDate={item.duedate} />
      ))}

      <Todo TodoName="buy coffee" TodoDate="22/10/2026" />
      <Todo TodoName="Go to Uni" TodoDate="22/10/2026" />
    </div>
  );
};
export default TodoItems;
