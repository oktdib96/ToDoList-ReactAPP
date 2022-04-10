import React, { Component } from "react";
import TasksList from "./components/TasksList";
import Header from "./components/Header";
import AddTaskPopup from "./components/AddTaskPopup";
import "./css/App.css";
import { StyledButton } from "./components/StyledButton";

class App extends Component {
  state = {
    text: "",
    date: "",
    active: false,
    tasks: [
      {
        id: 1,
        text: "Zadanie1fdsdf",
        date: "2024-02-04",
      },
      { id: 2, text: "Zadanie2", date: "2023-01-01" },
      { id: 3, text: "Zadanie3", date: "2022-05-10" },
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
  handleRemoveAllTasks = () => {
    this.setState({
      tasks: [],
    });
  };
  handleShowPopup = () => {
    this.setState({
      active: !this.state.active,
    });
  };
  handleNewTask = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      text: "",
      data: "",
      tasks: [
        ...prevState.tasks,
        {
          id: this.state.tasks.length + 1,
          text: this.state.text,
          date: this.state.date,
        },
      ],
    }));
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
          <StyledButton primary onClick={this.handleRemoveAllTasks}>
            Usuń wszystko
          </StyledButton>
        </div>
        {this.state.active ? (
          <AddTaskPopup
            text={this.state.text}
            date={this.state.date}
            data={this.state.tasks}
            popup={this.handleShowPopup}
            newTask={this.handleNewTask}
            submit={this.handleSubmit}
          />
        ) : null}
      </>
    );
  }
}

export default App;
