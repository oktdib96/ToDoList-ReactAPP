import React, { Component } from "react";
import TasksList from "./components/TasksList";
import Header from "./components/Header";
import AddTaskPopup from "./components/AddTaskPopup";
import "./css/App.css";
import { StyledButton } from "./components/StyledButton";

class App extends Component {
  state = {
    active: false,
    tasks: [
      {
        id: 1,
        text: "Zadanie1fdsdf  fdfsdfd fdsadasd sdadsadas",
        date: "01.01.2023",
      },
      { id: 2, text: "Zadanie2", date: "01.01.2023" },
      { id: 3, text: "Zadanie3", date: "01.01.2023" },
    ],
  };
  handleRemoveTask = (id) => {
    const tasks = this.state.tasks;
    const index = tasks.findIndex((task) => task.id === id);
    tasks.splice(index, 1);
    this.setState({
      tasks: tasks,
    });
  };
  handleShowPopup = () => {
    this.setState({
      active: !this.state.active,
    });
  };
  render() {
    return (
      <>
        <div
          className="app"
          style={this.state.active ? { filter: "blur(10px)" } : null}
        >
          <Header />
          <TasksList remove={this.handleRemoveTask} tasks={this.state.tasks} />
          <StyledButton onClick={() => this.handleShowPopup()}>
            Dodaj zadanie
          </StyledButton>
          <StyledButton primary>Usuń wszystko</StyledButton>
        </div>
        {this.state.active ? (
          <AddTaskPopup popup={this.handleShowPopup} />
        ) : null}
      </>
    );
  }
}

export default App;
