import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class TodoApp extends Component {
  constructor(){
    super()
    this.state = {list:['a']}
    this.hundleTodoSubmit = this.hundleTodoSubmit.bind(this);
  }
  hundleTodoSubmit(e){
    var todos = this.state.list
    var newtodos = todos.concat([e]);
    this.setState({list:newtodos})
  }
  render() {
    return (
      <div className="TodoApp">
        <TodoList list={this.state.list}/>
        <TodoCreater onSubmit={this.hundleTodoSubmit}/>
      </div>
    );
  }
}
class TodoList extends Component {
  constructor(){
    super()
    this.state = {list:['a']}
  }
  render(){
    return(
      <h1>{this.props.list}</h1>
    );
  }
}
class TodoCreater extends Component {
  constructor(){
    super();
    this.state = {todo:""};
    this.handleTodo = this.handleTodo.bind(this);
    this.hundleSubmit = this.hundleSubmit.bind(this);
  }
  hundleSubmit(e){
    e.preventDefault();
    var todo = this.state.todo.trim();//trimで両端の空白を除く
  }

  handleTodo(e){
    this.setState({todo:e.target.value});
  }
  render(){
    return(
      <form className="todoForm" onSubmit={this.props.onSubmit}>
        <input type='text' onChange={this.handleTodo} />
        <input type='submit'/>
      </form>
    );
  }
}

export default TodoApp;
