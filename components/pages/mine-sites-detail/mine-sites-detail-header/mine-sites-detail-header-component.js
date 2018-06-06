import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'routes';

// components
import Icon from 'components/common/icon';

// styles
import styles from './mine-sites-detail-header-styles.scss';

class MineSitesDetailHeader extends PureComponent {
  static propTypes = {
    mineSite: PropTypes.object.isRequired,
    currentLanguage: PropTypes.string.isRequired,
    togglePrintable: PropTypes.func.isRequired
  }

  handlePrint = () => { this.props.togglePrintable(true); };

  render() {
    const { currentLanguage, mineSite } = this.props;
    const { name, country } = mineSite;
    const { name: countryName } = country;

    return (
      <div className="c-mine-sites-detail-header">
        <style jsx>{styles}</style>
        <div className="l-layout">
          <div className="print-logo">
            <h2 className="print-page-title">Mine Site Report</h2>
            <img className="logo-img" src="/static/logos/RMIndex_vector.svg" alt="RMI logo" />
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <div className="left-side">
                <Link
                  route="mine-sites"
                  params={{ language: currentLanguage }}
                >
                  <a className="go-back-link">
                    <Icon
                      name="large-arrow"
                      className="-large-arrow"
                    />
                    {name}
                  </a>
                </Link>
                <span className="country-name">
                  {countryName}
                </span>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6">
              <div className="right-side">
                <div className="pdf-print">
                  <button
                    className="print-btn"
                    onClick={this.handlePrint}
                  >
                    <Icon
                      name="download"
                      className="-big -download -reverse"
                    />
                    Print Report
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MineSitesDetailHeader;
