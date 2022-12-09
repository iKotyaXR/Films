export default class Movies {
  _apiLink = 'https://api.themoviedb.org/3';

  constructor(key) {
    this.apiKey = key;
  }
  async getMovie(id) {
    fetch('');
    let movie = await fetch(`${this._apiLink}/movie/${id}?api_key=33d7e35c3bfff3e6599b6fecc8aa070e`);
    if (!movie.ok) throw new Error('Error Movie');
    let data = await movie.json();
    return data;
  }
}
