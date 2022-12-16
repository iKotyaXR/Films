import React, { Component } from 'react';
import CardList from '../CardList';
import Header from '../Header/';
import Searchbar from '../Searchbar';
import './App.scss';
import Emitter from '../../services/Emmiter';

/*
(eslint/prettier/husky/lint-staged)
? Напишите отдельную функцию для сокращения текста описания, сокращенный текст не должен обрезать слова на середине.
// Реализуйте обработку ситуации, когда у пользователя нет сети (вы можете эмулировать это в chrome dev tools).
? При старте приложения получать список жанров, хранить данные с помощью React.Context, отображать по соотвествующим ID в списке жанров карточки
*/

export default class App extends Component {
  state = {
    title: null,
  };
  render() {
    return (
      <div className="app">
        <Header emitter={Emitter}></Header>
        <Searchbar emitter={Emitter} />
        <CardList />
      </div>
    );
  }
}
