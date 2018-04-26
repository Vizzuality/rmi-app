import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'routes';

// styles
import styles from './footer-styles.scss';

class Footer extends PureComponent {
  static propTypes = {
    root: PropTypes.string.isRequired,
    currentLanguage: PropTypes.string.isRequired
  }

  render() {
    const { root, currentLanguage } = this.props;

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
                    params={{ language: currentLanguage }}
                  >
                    <a href="">
                      <img src={`/static/logos/${logo}.svg`} alt="Responsible Mining Index" />
                    </a>
                  </Link>
                </div>
                {isFoundation &&
                  <div className="footer-section">
                    <span>&copy; 2018 - Responsible Mining FOUNDATION</span>
                  </div>}
                {!isFoundation &&
                  <div className="footer-section">
                    <ul className="footer-nav-links-list">
                      <li className="footer-nav-links-item">
                        <Link
                          route="library"
                          params={{ language: currentLanguage }}
                        >
                          <a>Document Library</a>
                        </Link>
                      </li>
                      <li className="footer-nav-links-item">
                        <Link
                          route="scoring-framework"
                          params={{ language: currentLanguage }}
                        >
                          <a>Scoring Framework</a>
                        </Link>
                      </li>
                      <li className="footer-nav-links-item">
                        <Link
                          route="methodology"
                          params={{ language: currentLanguage }}
                        >
                          <a>Application of Methodology</a>
                        </Link>
                      </li>
                      <li className="footer-nav-links-item">
                        <Link
                          route="downloads"
                          params={{ language: currentLanguage }}
                        >
                          <a>Downloads</a>
                        </Link>
                      </li>
                      <li className="footer-nav-links-item">
                        <Link
                          route="corrigenda"
                          params={{ language: currentLanguage }}
                        >
                          <a>Corrigenda</a>
                        </Link>
                      </li>
                      <li className="footer-nav-links-item">
                        <Link
                          route="sources"
                          params={{ language: currentLanguage }}
                        >
                          <a>Sources</a>
                        </Link>
                      </li>
                    </ul>
                    <Link
                      route="foundation"
                      params={{ language: currentLanguage }}
                    >
                      <a className="foundation-link">Responsible Mining FOUNDATION</a>
                    </Link>
                  </div>}
                {!isFoundation &&
                  <div className="footer-section">
                    <div className="copyright">
                      <p>Copyright notice</p>
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
                    </div>
                  </div>}
                <div className="footer-section -vizzuality">
                  <span>Designed by
                    <a
                      href="https://vizzuality.com/"
                      rel="noreferrer noopener"
                      target="_blank"
                    >
                      <img src="/static/logos/Vizz_Index_WHITE.svg" alt="Vizzuality" />
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6">
              <div className="right-side">
                <div className="footer-section">
                  <h4 className="subscribe-title">Subscribe to newsletter and updates</h4>
                  <form
                    className="subscribe-form"
                    action="https://responsibleminingindex.us13.list-manage.com/subscribe/post?u=acc420b06d58d1313623a848e&amp;id=dfa95db630"
                    method="POST"
                  >
                    <input
                      type="text"
                      name="FNAME"
                      placeholder="First name"
                      required
                    />
                    <input
                      type="text"
                      name="LNAME"
                      placeholder="Last name"
                      required
                    />
                    <input
                      type="text"
                      name="ORG"
                      placeholder="Organisation"
                      required
                    />
                    <input
                      type="text"
                      name="POSITION"
                      placeholder="Position"
                      required
                    />
                    <input
                      type="email"
                      name="EMAIL"
                      placeholder="Email address"
                      required
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
