const Item = (props) => {
  const Task = props.tasks.map((task) => (
    <li key={task.id} id={task.id} onClick={() => props.remove(task.id)}>
      <p>{task.text}</p>
    </li>
  ));
  return Task;
};

export default Item;
