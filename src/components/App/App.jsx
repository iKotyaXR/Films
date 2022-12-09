import React, { Component } from 'react';
import Header from '../Header/';
import Searchbar from '../Searchbar';
import './App.scss';
//import Movies from '../../services/Movies';

//const movies = new Movies('33d7e35c3bfff3e6599b6fecc8aa070e');

export default class App extends Component {
  state = {
    title: null,
  };
  render() {
    return (
      <div className="app">
        <Header></Header>
        <Searchbar />
      </div>
    );
  }
}
