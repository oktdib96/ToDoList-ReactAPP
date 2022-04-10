import Item from "./Item";
const TasksList = (props) => {
  return (
    <ul>
      <Item tasks={props.tasks} remove={props.remove} />
    </ul>
  );
};

export default TasksList;
