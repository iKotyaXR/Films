import { Component } from 'react';
import { Menu } from 'antd';
import './Header.scss';

const items = [
  {
    label: 'Search',
    key: 'search',
    className: 'menu__item',
  },
  {
    label: 'Rated',
    key: 'rated',
    className: 'menu__item',
  },
];

export default class Header extends Component {
  state = {
    active: 'search',
  };

  render() {
    const setActive = (e) => {
      this.setState({ active: e.key });
    };

    return (
      <header className="header">
        <Menu
          onClick={setActive}
          className="menu"
          items={items}
          mode="horizontal"
          selectable
          selectedKeys={this.state.active}
        ></Menu>
      </header>
    );
  }
}
