import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListItems from './listitem.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
library.add(faTrash);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem : {
        text: '',
        key: ''
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.editItem = this.editItem.bind(this);
    this.clear = this.clear.bind(this);
  }
  handleChange (event) {
    this.setState ({
      currentItem: {
        text:event.target.value,
        key:Date.now()
      }
    })
  }
  addItem (event) {
    event.preventDefault();
    const item = this.state.currentItem;
    this.setState({
      items: [...this.state.items, item],
      currentItem:{
        text: '',
        key: ''
      }
    })
  }
  deleteItem(text) {
    const filteredItems = this.state.items.filter(item => item.text !== text);
    this.setState({
      items: filteredItems
    })
  }
  editItem(text, key) {
    const items = this.state.items;
    items.map(item => {
      if(item.key ===key){
        item.text = text
      }
    })
    this.setState({
        items: items
      })
    
  }
  clear(){
    this.setState({
      items:[]
    })
  }
  render() {
    
  console.log(this.state.currentItem.key);
    return(
      <div className="app">
        <header>
          <form id="to-do-form">
            <input type="text" placeholder="Enter text" value={this.state.currentItem.text} onChange={this.handleChange}/>
            <button type="submit" className="addButton" onClick={this.addItem}>Add</button>
          </form>
        </header>
        
        <ListItems items={this.state.items} deleteItem={this.deleteItem} editItem={this.editItem} />
        <button type="button" className="clearButton" onClick={this.clear}>Clear</button>
      </div>
      ); 
    
  }
}

export default App;
