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

  deltodos = (index)=> {
    this.state.todos.splice(index, 1)
    this.setState({
      todos: this.state.todos
    })
  }
  render() {
    return (
      <div className="app">
        <h1 className="heading"> Todo Application </h1>
        <input type="text" placeholder="Enter Todos" onChange={(e) => { this.setState({ value: e.target.value }) }}></input>
        <button onClick={() => this.add()}>Add Todo</button>
        <ul>
          {this.state.todos.map((v, i) => {
            return <li key={i}>{v} <button className="addtodo" onClick = {()=>this.deltodos()}>delete</button></li>
          }
          )}
        </ul>
      </div>
    )
  }
}


// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       value: "",
//       todo: []
//     }
//   }
//   add = () => {
//     if (this.state.value !== "") {
//       this.state.todo.push(this.state.value)
//       this.setState({
//         todo: this.state.todo,
//         value: ""
//       })
//     }
//   }
//   delete = (index) => {
//     this.state.todo.splice(index, 1)
//     this.setState({
//       todo: this.state.todo
//     })
//   }

//   render() {
//     return (
//       <div>
//         <h1>Todo App</h1>
//         <input type="text" placeholder="Enter Todo" onChange={(e) => { this.setState({ value: e.target.value }) }} />
//         <button onClick={() => this.add()}>Add Todo</button>
//         <ul>
//           {this.state.todo.map((v, i) => {
//             return <li key={i}>{v}<button onClick={() => this.delete(i)}>Delete Task</button></li>
//           })}
//         </ul>
//       </div>
//     )
//   }

// }



export default App;
