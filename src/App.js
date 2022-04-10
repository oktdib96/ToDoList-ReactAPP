import React, { Component } from "react";
import TasksList from "./components/TasksList";
import Header from "./components/Header";
import "./css/App.css";
import { StyledButton } from "./components/StyledButton";

class App extends Component {
  state = {
    tasks: [
      {
        text: "Zadanie1",
        date: "01.01.2023",
      },
    ],
  };
  render() {
    return (
      <div className="app">
        <Header />
        <TasksList />
        <StyledButton>Dodaj zadanie</StyledButton>
        <StyledButton primary>Usuń wszystko</StyledButton>
      </div>
    );
  }
}

export default App;
