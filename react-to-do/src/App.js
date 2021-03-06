import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { description: "Walk the Cat" , isCompleted:  true},
        { description: "Throw away the dishes" , isCompleted: false},
        { description: "Buy new dishes" , isCompleted: false}
      ],
      newToDoDescription: ''
    };
  }

deleteToDo(todo) {
  this.setState({ todos: this.state.todos.filter(item => item !== todo)});
}

handleChange(e) {
  this.setState({ newToDoDescription: e.target.value });
}

handleSubmit(e) {
  if (!this.state.newToDoDescription) { return }
  e.preventDefault();
  const newToDo = { description: this.state.newToDoDescription, isCompleted: false };
  this.setState({ todos: [...this.state.todos, newToDo], newToDoDescription: '' });
}

toggleComplete(index) {
  const todos = this.state.todos.slice();
  const todo = todos[index];
  todo.isCompleted = todo.isCompleted ? false : true;
  this.setState({ todos: todos });
}

  render() {
    return (
      <div className="App">
        <ul>
          { this.state.todos.map( (todo,index) => 
           <ToDo key={ index } 
              description = { todo.description } 
              isCompleted = {todo.isCompleted}
              toggleComplete = { () => this.toggleComplete(index) }
              deleteToDo ={ () => this.deleteToDo(todo) }
              /> 
            )
          }
        </ul>
        <form onSubmit={ (e) => this.handleSubmit(e) }>
          <input type="text" value={this.state.newToDoDescription} onChange={ (e) => {this.handleChange(e) }} />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default App;