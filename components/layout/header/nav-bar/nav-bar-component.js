import React, { PureComponent } from 'react';
import { Link } from 'routes';

class NavBar extends PureComponent {
  render() {
    return (
      <nav className="c-nav-bar">
        <ul className="nav-list">
          <li>
            <Link route="results">
              <a href="#results">Results</a>
            </Link>
          </li>
          <li>
            <Link route="leading-practices">
              <a href="#leading-practices">Leading Practices</a>
            </Link>
          </li>
          <li>
            <Link route="companies">
              <a href="#companies">Companies</a>
            </Link>
          </li>
          <li>
            <Link route="mine-sites">
              <a href="#mine-sites">Mine Sites</a>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
