import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: [],
      value: ""
    }
  }
  add = () => {
    if (this.state.value !== "") {
      this.state.todos.push(this.state.value)
      this.setState({
        todos: this.state.todos,
        value: ""
      })
    }
  }

  deltodos = (index) => {
    this.state.todos.splice(index, 1)
    this.setState({
      todos: this.state.todos
    })
  }
  edittodo = (index) => {
    let change = prompt("Enter new value: ");
    this.state.todos[index] = change
    this.setState({
      todos: this.state.todos
    })
  }

  render() {
    return (
      <div className="app">
        <h1 className="heading"> Todo Application </h1>
        <input value={this.state.value} type="text" placeholder="Enter Todos" onChange={(e) => { this.setState({ value: e.target.value }) }}></input>
        <button onClick={() => this.add()}>Add Todo</button>
        <ul>
          {this.state.todos.map((v, i) => {
            return <li key={i}>{v} <button className="deltodo" onClick={() => this.deltodos()}>delete</button><button onClick={() => this.edittodo(i)}>Edit </button></li>
          }
          )}
        </ul>
        
      </div>
      
    )
    
  }
  
}

export default App;