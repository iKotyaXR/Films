import React, { Component } from 'react';
import CardList from '../CardList';
import Header from '../Header/';
import Searchbar from '../Searchbar';
import './App.scss';
import Emitter from '../../services/Emmiter';

export default class App extends Component {
  state = {
    title: null,
  };
  render() {
    return (
      <div className="app">
        <Header></Header>
        <Searchbar emitter={Emitter} />
        <CardList />
      </div>
    );
  }
}
