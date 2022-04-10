import Item from "./Item";
const TasksList = (props) => {
  const Task = props.tasks.map((task) => (
    <Item key={task.id} content={task.text} date={task.date} />
  ));
  return <ul>{Task}</ul>;
};

export default TasksList;
