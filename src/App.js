import React, { Component } from "react";
import TasksList from "./components/TasksList";
import Header from "./components/Header";
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
      <div>
        <Header />
        <TasksList />
      </div>
    );
  }
}

export default App;
