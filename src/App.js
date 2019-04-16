import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    list: [
    ],
    strValue: ''
  }

  addElementToTodo = () => {
    let newArr = [...this.state.list];
    newArr.push({ title: this.state.strValue, id: Date() })



    this.setState({
      list: newArr
    })
  }

  onChangeHandler = (e) => {
    this.setState({
      strValue: e.target.value
    })
    console.log(this.state.strValue)
  }

  handleRemove(id) {
    let newArr = [...this.state.list]
    let remainder = newArr.filter((el) => {
      if (el.id !== id) return id;
    })
    console.log(remainder)
    // Update state with filter
    this.setState({ list: remainder });
  }


  render() {
    console.log(this.state.list)
    let mapOverTodo = this.state.list.map((el, i) => {
      return (
        <p key={i} onClick={() => this.handleRemove(el.id)}>{el.title}</p>
      )
    })


    return (
      <div className="App">
        <div>What do you want to do?</div>
        <div style={{ display: 'block' }}>
          {mapOverTodo}
        </div>
        <input type="text" onChange={(e) => this.onChangeHandler(e)} placeholder="Add something here"></input>
        <button onClick={this.addElementToTodo}>Submit</button>
      </div>
    );
  }
}

export default App;
