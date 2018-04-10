import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'routes';

// styles
import styles from './footer-styles.scss';

class Footer extends PureComponent {
  static propTypes = { root: PropTypes.string.isRequired }

  constructor(props) {
    super(props);

    this.state = {};
  }

  handleField = evt => this.setState({ [evt.target.name]: evt.target.value })

  handleSignUp = (evt) => {
    evt.preventDefault();
    // TO-DO
  }

  render() {
    const { root } = this.props;
    const { email } = this.state;

    const isFoundation = root !== 'index';

    const logo = isFoundation ?
      'RMF-logo-WHITE' : 'RMI_Index_WHITE';

    return (
      <footer className="c-footer">
        <style jsx>{styles}</style>
        <div className="l-layout">
          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <div className="left-side">
                <div className="footer-section">
                  <Link
                    route={root}
                  >
                    <a href="">
                      <img src={`/static/logos/${logo}.png`} alt="Responsible Mining Index" />
                    </a>
                  </Link>
                </div>
                {isFoundation &&
                  <div className="footer-section">
                    <span>&copy; 2018 - Responsible Mining Foundation</span>
                  </div>}
                {!isFoundation &&
                  <div className="footer-section">
                    <ul className="footer-nav-links-list">
                      <li className="footer-nav-links-item">
                        <Link
                          route="library"
                        >
                          <a>Document Library</a>
                        </Link>
                      </li>
                      <li className="footer-nav-links-item">
                        <Link
                          route="results"
                        >
                          <a>Scoring Framework</a>
                        </Link>
                      </li>
                      <li className="footer-nav-links-item">
                        <Link
                          route="results"
                        >
                          <a>Application of Methodology</a>
                        </Link>
                      </li>

                      <li className="footer-nav-links-item">
                        <Link
                          route="foundation"
                        >
                          <a>Responsible Mining Foundation</a>
                        </Link>
                      </li>
                    </ul>
                  </div>}
                {!isFoundation &&
                  <div className="footer-section">
                    <p>
                      All data and written content are licensed
                      under the Creative Commons Attribution-NonCommercial
                      4.0 International License (CC BY-NC 4.0).
                    </p>
                    <a
                      href="https://creativecommons.org/licenses/by-nc/4.0/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="license"
                    >
                      <img
                        className="license-img"
                        src="/static/images/cc-by-nc_icon.png"
                        alt="Creative Commons Attribution-NonCommercial 4.0 International License (CC BY-NC 4.0)"
                      />
                    </a>
                    <p>
                      Users are free to share and adapt the material but must give
                      appropriate credit, provide a link to the license
                      and indicate if changes were made. The licensed
                      material may not be used for commercial purposes,
                      or in a discriminating, degrading or distorting way.
                      When cited, attribute to: “Responsible Mining Index
                      2018 (RMI), Responsible Mining Foundation (RMF).”
                      Images, photographs, and video content depicted on
                      RMI and RMF websites are excluded from this license,
                      except where noted.
                    </p>
                  </div>}
                <div className="footer-section -vizzuality">
                  <span>Designed by
                    <a
                      href="https://vizzuality.com/"
                      rel="noreferrer noopener"
                      target="_blank"
                    >
                      <img src="/static/logos/Vizz_Index_WHITE.png" alt="Vizzuality" />
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6">
              <div className="right-side">
                <div className="footer-section">
                  <h4 className="subscribe-title">Subscribe to newsletter and updates</h4>
                  <form className="subscribe-form" onSubmit={this.handleSignUp}>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First name"
                      onChange={this.handleField}
                      defaultValue={email}
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last name"
                      onChange={this.handleField}
                      defaultValue={email}
                    />
                    <input
                      type="text"
                      name="organisation"
                      placeholder="Organisation"
                      onChange={this.handleField}
                      defaultValue={email}
                    />
                    <input
                      type="text"
                      name="position"
                      placeholder="Position"
                      onChange={this.handleField}
                      defaultValue={email}
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email address"
                      onChange={this.handleField}
                      defaultValue={email}
                    />
                    <button type="submit">Sign up</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
