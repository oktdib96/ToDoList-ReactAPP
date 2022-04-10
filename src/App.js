import React, { Component } from "react";
import TasksList from "./components/TasksList";
import Header from "./components/Header";
import "./css/App.css";

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
      </div>
    );
  }
}

export default App;
