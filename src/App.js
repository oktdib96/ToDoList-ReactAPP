import React, { Component } from "react";
import TasksList from "./components/TasksList";
import Header from "./components/Header";
import "./css/App.css";
import { StyledButton } from "./components/StyledButton";

class App extends Component {
  state = {
    tasks: [
      { id: 1, text: "Zadanie1", date: "01.01.2023" },
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
  render() {
    return (
      <div className="app">
        <Header />
        <TasksList remove={this.handleRemoveTask} tasks={this.state.tasks} />
        <StyledButton>Dodaj zadanie</StyledButton>
        <StyledButton primary>Usuń wszystko</StyledButton>
      </div>
    );
  }
}

export default App;
