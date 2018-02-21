import React, { PureComponent } from 'react';
import { Link } from 'routes';

// styles
import styles from './footer-styles.scss';

class Footer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = { email: undefined };
  }

  handleEmail = evt => this.setState({ email: evt.target.value })

  handleSignUp = (evt) => {
    evt.preventDefault();
    // TO-DO
  }

  render() {
    const { email } = this.state;

    return (
      <footer className="c-footer">
        <style jsx>{styles}</style>
        <div className="l-layout">
          <div className="row">
            <div className="col-xs-12 col-lg-6">
              <div className="left-side">
                <div className="footer-section">
                  Responsible mining index
                </div>
                <div className="footer-section">
                  <ul className="footer-nav-links-list">
                    <li className="footer-nav-links-item">
                      <Link
                        route="foundation"
                      >
                        <a>Foundation</a>
                      </Link>
                    </li>
                    <li className="footer-nav-links-item">
                      <Link
                        route="foundation"
                      >
                        <a>Document Library</a>
                      </Link>
                    </li>
                    <li className="footer-nav-links-item">
                      <Link
                        route="results"
                      >
                        <a>Scoring framework</a>
                      </Link>
                    </li>
                    <li className="footer-nav-links-item">
                      <Link
                        route="results"
                      >
                        <a>Application of methodology</a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="footer-section">
                  <p>RMI Rights ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
                <div className="footer-section">
                  <span>Designed by <a href="https://vizzuality.com/" rel="noreferrer noopener" target="_blank">Vizzuality</a></span>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-lg-6">
              <div className="right-side">
                <div className="footer-section">
                  Responsible mining index
                </div>
                <div className="footer-section">
                  <h4 className="subscribe-title">Subscribe to newsletter and updates</h4>

                  <form className="subscribe-form" onSubmit={this.handleSignUp}>
                    <input
                      type="email"
                      placeholder="Email address"
                      onChange={this.handleEmail}
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
