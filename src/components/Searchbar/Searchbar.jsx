import { Component } from 'react';
import { Input } from 'antd';
import './Searchbar.scss';

export default class Searchbar extends Component {
  render() {
    return <Input type="search" className="searchbar" placeholder="Type to search..." />;
  }
}
