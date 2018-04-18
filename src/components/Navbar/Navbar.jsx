import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import cx from 'classnames';

const menuClasses = open => {
  return cx({
    'navbar__menu--open': open,
    'navbar__menu--closed': !open,
  })
}

class Navbar extends Component {

  constructor() {
    super();

    this.state = {
      open: false,
    }

    this.menuOpen = this.menuOpen.bind(this);
    this.menuItems = this.menuItems.bind(this);
  }

  menuOpen() {
    this.setState({ open: !this.state.open });
  }

  // todo: hook up data
  menuItems() {
    const dataArr = [
      {
        name: 'home',
        id: 1,
        url: '/home',
      },
      {
        name: 'about',
        id: 2,
        url: '/about',
      },
    ];

    return dataArr.map(item => {
      return (
        <li
          className='navbar__menu-item'
          key={`nav-list--${item.id}`}
        >
          <Link
            to={item.url}
            onClick={() => this.menuOpen()}
          >
            {item.name}
          </Link>
        </li>
      );
    });
  }

  render() {
    const {
      open,
    } = this.state;

    return(
      <div className='navbar'>
        <div
          className='navbar__menu-button'
          onClick={() => this.menuOpen()}
        >
        Menu
        </div>
        <div className={menuClasses(open)} >
          <ul className='navbar__menu' >
           {this.menuItems()}
          </ul>
        </div>
      </div>
    );
  }
}



Navbar.propTypes = {
  open: PropTypes.bool,
  menuOpen: PropTypes.func,
};

Navbar.defaultProps = {
  open: false,
  menuOpen: () => {},
};

export default Navbar;