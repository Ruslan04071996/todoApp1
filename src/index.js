import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Footer from './components/footer'
import Header from './components/header';
import TodoList from './components/taskList';
import Main from './components/main';
import { formatDistanceToNow } from 'date-fns';

class App extends Component {
  
  idItem = 100;
  state = {
    data: [
      this.createTodoItem('Completed task'),
      this.createTodoItem('Editing Task'),
      this.createTodoItem('Active Task')
    ]
  }
  createTodoItem  (text) {
    return {
      id: this.idItem++,
      text: text,
      date: formatDistanceToNow(new Date()),
      done: false,
    }
  }
  removeItem = (id) => {
    this.setState(({ data }) => {
      const idx = data.filter(el => el.id);
      data.splice(idx, 1)
      const before = data.slice(0, idx);
      const after = data.slice(idx + 1);
      const resArr = [...before, ...after]
      return {
        data: resArr
      }
    })
  }
  addItem = (text) => {
    const newObj = this.createTodoItem(text)

    this.setState(({ data }) => {
      const newArr = [...data, newObj];
      return {
        data: newArr
      }
    })
  }
  onToggleDone = (id) => {
    this.setState(({ data }) => {
      
      const idx = data.findIndex(el => el.id === id);
     const oldItem = data[idx];
     const newItem = {...oldItem,done:!oldItem.done};
     const newArray = [
       ...data.slice(0,idx),
       newItem,
       ...data.slice(idx + 1)
     ];
     return {
       data: newArray
     }
    })

  }
   handlerAll = () => {
  return this.state.data.length;
  }
   handlerDone = () => {
    
  }
 handlerActive = () => {
   
  }
  render() {
    const doneCount = this.state.data.filter(el => el.done).length;
    const todoCount = this.state.data.length - doneCount;
    const allCount = this.state.data.length;
    
    return (
      <section className='todoApp'>
        <Header addItem={this.addItem} />
        <Main todos={this.state.data} done ={this.state.data.done} doneCount = {doneCount} todoCount = {todoCount} onDeleted={this.removeItem} onToggleDone={this.onToggleDone} />
      </section>
    )

  }

}

ReactDOM.render(<App />, document.querySelector('#root'))