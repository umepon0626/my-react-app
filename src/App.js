import React, { Component } from 'react';
import './App.css';

class TodoApp extends Component {
  constructor(){
    super()
    this.state = {list:["a","b"]}
    this.hundleTodoSubmit = this.hundleTodoSubmit.bind(this);
  }
  hundleTodoSubmit(e){
    var d = e.target.value //targetvalueが効いてない！！
    return({d})
  //  var todos = this.state.list
  //  var newtodos = this.state.list.concat([e.target.value]);
  //  this.setState({list:newtodos})
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
//  constructor(){
  //  super()
    //this.state = {list:['a']}
  //}
  render(){
    return(
      <h1>{this.props.list[1]}</h1>
    );
  }
}
class TodoCreater extends Component {
  constructor(){
    super();
    this.state = {todo:""};
    this.handleTodo = this.handleTodo.bind(this);
  }

  handleTodo(e){
    this.setState({todo:e.target.value});
  }
  render(){
    return(
      <div>
      <form className="todoForm" onSubmit={this.props.onSubmit}>
        <input type="text" value={this.state.todo} onChange={this.handleTodo} />
        <input type='submit'/>
      </form>

      </div>
    );
  }
}

export default TodoApp;
