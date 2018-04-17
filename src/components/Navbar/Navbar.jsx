import React, { Component } from 'react';
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
        name: 'test',
        id: 1,
      },
      {
        name: 'test other',
        id: 2,
      },
    ];

    return dataArr.map(item => {
      return (
        <li
          className='navbar__menu-item'
          key={`nav-list--${item.id}`}
        >
          {item.name}
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
        />
        <div className={menuClasses(open)} >
          <ul className='navbar__menu-list' >
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