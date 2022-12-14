import React, { Component } from 'react';
import CardList from '../CardList';
import Header from '../Header/';
import Searchbar from '../Searchbar';
import './App.scss';
import Emitter from '../../services/Emmiter';

/*
(eslint/prettier/husky/lint-staged)
????? Напишите отдельную функцию для сокращения текста описания, сокращенный текст не должен обрезать слова на середине.
Реализуйте обработку ситуации, когда у пользователя нет сети (вы можете эмулировать это в chrome dev tools).
Гостевая сессия local-storage
Разделяем приложение на 2 таба - Search и Rated, в табе Rated выводим только список тех фильмов, которы оценивали (см апи) без строки поиска - в остальном макет идетичен.
Добавляем звезды для голосования (компонент Rate). Если вы не голосовали за фильм - все звезды должны быть пустыми, если голосовали - тот рейтинг, что вы проставили фильму.
????? При старте приложения получать список жанров, хранить данные с помощью React.Context, отображать по соотвествующим ID в списке жанров карточки
*/


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
