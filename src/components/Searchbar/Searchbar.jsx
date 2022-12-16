import { Component } from 'react';
import { Input } from 'antd';
import './Searchbar.scss';
import Emitter from '../../services/Emmiter';

export default class Searchbar extends Component {
  state = {
    rated: false,
  };
  componentDidMount() {
    Emitter.on('changetab', (tab) => {
      if (tab === 'rated' && !this.state.rated) {
        this.setState({ rated: true });
      } else if (tab === 'search' && this.state.rated) {
        this.setState({ rated: false });
      }
    });
  }

  render() {
    if (!this.state.rated)
      return (
        <Input
          type="search"
          className="searchbar"
          onChange={this.props.emitter.emit.bind(this.props.emitter, 'search')}
          placeholder="Type to search..."
        />
      );
  }
}
