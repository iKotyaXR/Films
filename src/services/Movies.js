export default class Movies {
  _apiLink = 'https://api.themoviedb.org/3';
  imgLink = 'https://image.tmdb.org/t/p/w500/';

  constructor(key) {
    this.apiKey = key;
    this.getGenres();
  }
  async getMovie(id) {
    fetch('');
    let movie = await fetch(`${this._apiLink}/movie/${id}?api_key=${this.apiKey}`);
    if (!movie.ok) throw new Error('Error Movie');
    let data = await movie.json();
    return data;
  }
  ///https://api.themoviedb.org/3/search/movie?api_key=33d7e35c3bfff3e6599b6fecc8aa070e&query=dig
  async searchMovie(query, page = 1) {
    let movies = await fetch(`${this._apiLink}/search/movie/?api_key=${this.apiKey}&query=${query}&page=${page}`);
    if (!movies.ok) throw new Error('Error Search');
    let data = await movies.json();
    return data;
  }
  async getGenres() {
    if (!this.genres) this.genres = await (await fetch(`${this._apiLink}/genre/list?api_key=${this.apiKey}`)).json();
    return this.genres;
  }
}
