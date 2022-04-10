import "../css/AddTaskPopup.css";
const AddTaskPopup = (props) => {
  return (
    <div className="popup">
      <div className="close" onClick={() => props.popup()}>
        x
      </div>
      <form onSubmit={props.submit}>
        <label>Treść zadania:</label>
        <input
          value={props.text}
          type="text"
          placeholder="wpisz zadanie..."
          required={true}
          name="text"
          onChange={props.newTask}
        />
        <label>Do kiedy należy zrobić</label>
        <input
          value={props.date}
          type="date"
          required={true}
          name="date"
          onChange={props.newTask}
        />
        <button type="submit">Dodaj zadanie!</button>
      </form>
    </div>
  );
};

export default AddTaskPopup;
