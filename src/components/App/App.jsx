import React, { Component } from 'react';

import CardList from '../CardList';
import Header from '../Header/';
import Searchbar from '../Searchbar';
import './App.scss';
import Emitter from '../../services/Emmiter';

export default class App extends Component {
  state = {
    title: null,
    active: 'search',
  };

  setActive = (e) => {
    console.log(this.state);
    this.setState(() => {
      return { active: e };
    });
  };

  render() {
    return (
      <div className="app">
        <Header emitter={Emitter} setActive={this.setActive} active={this.state.active}></Header>
        <Searchbar emitter={Emitter} />
        <CardList active={this.state.active} />
      </div>
    );
  }
}
