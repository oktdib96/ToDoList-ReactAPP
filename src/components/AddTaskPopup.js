import "../css/AddTaskPopup.css";
const AddTaskPopup = (props) => {
  return (
    <div className="popup">
      <div className="close" onClick={() => props.popup()}>
        x
      </div>
      <form>
        <label>Treść zadania:</label>
        <input type="text" />
        <label>Do kiedy należy zrobić</label>
        <input type="date" />
        <button>Dodaj zadanie!</button>
      </form>
    </div>
  );
};

export default AddTaskPopup;
