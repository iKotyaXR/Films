import { Component } from 'react';

import './CardList.scss';
import FilmCard from '../FilmCard/FilmCard';
import Movies from '../../services/Movies';
import Emitter from '../../services/Emmiter';
import { Alert, Pagination, Spin } from 'antd';
import { debounce } from 'lodash';
export default class CardList extends Component {
  state = {
    films: [],
    loading: false,
    query: null,
    pages: 1,
    selected_page: 1,
  };

  movies = new Movies('33d7e35c3bfff3e6599b6fecc8aa070e');
  searchdeb = debounce(
    (e) => {
      this.getPageFilms(e);
    },
    1000,
    {
      maxWait: Infinity,
    }
  );

  getPageFilms = (query, page = 1) => {
    if (!query) return this.setState({ films: [], query });
    this.setState({ films: [], loading: true, query, selected_page: page });
    this.searchFilms(query, page);
  };
  changePage = (page) => {
    this.getPageFilms(this.state.query, page);
  };
  search = (e) => {
    if (!e.target.value) return this.setState({ films: [], query: e.target.value });
    this.searchdeb(e.target.value);
  };
  componentDidMount() {
    Emitter.on('search', this.search);
  }
  componentWillUnmount() {
    Emitter.off('search', this.search);
  }
  getImage(link, path) {
    return path ? link + path : 'https://critics.io/img/movies/poster-placeholder.png';
  }

  searchFilms(query, page) {
    this.movies.getGenres().then((allGenres) => {
      this.movies.searchMovie(query, page).then((films) => {
        if (films.results.length === 0) {
          this.setState({
            films: [],
            loading: false,
          });
        } else
          this.setState({
            films: films.results.map((res) => {
              let genres = res.genre_ids.map((id) => {
                return allGenres['genres'].find((g) => g.id === id);
              });
              return {
                poster: this.getImage(this.movies.imgLink, res.poster_path),
                name: res.title,
                date: res.release_date,
                rate: res.vote_average.toFixed(1),
                description: res.overview,
                tags: genres,
                key: res.id,
              };
            }),
            loading: false,
            pages: films.total_pages,
          });
      });
    });
  }

  getFilm(id) {
    this.movies.getMovie(id).then((res) => {
      this.setState(({ films }) => {
        let newFilms = JSON.parse(JSON.stringify(films));
        newFilms.push({
          poster: this.movies.imgLink + res.poster_path,
          name: res.title,
          date: res.release_date,
          rate: res.vote_average.toFixed(1),
          description: res.overview,
          tags: res.genres,
          key: res.id,
        });
        return { films: newFilms };
      });
    });
  }

  render() {
    return (
      <div className="cards">
        <div className="card-list">
          {this.state.loading ? (
            <Spin className="spin" />
          ) : this.state.films.length ? (
            this.state.films.map((el) => {
              return <FilmCard {...el}></FilmCard>;
            })
          ) : this.state.query ? (
            <Alert message="Movies not found" type="error" className="alert" showIcon />
          ) : null}
        </div>
        <Pagination
          current={this.state.selected_page}
          showSizeChanger={false}
          defaultPageSize={1}
          total={this.state.pages}
          onChange={this.changePage}
          className={'pagination'}
        ></Pagination>
      </div>
    );
  }
}
