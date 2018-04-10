import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'routes';

// components
import Icon from 'components/common/icon';

// styles
import styles from './mine-sites-detail-header-styles.scss';

class MineSitesDetailHeader extends PureComponent {
  static propTypes = { mineSite: PropTypes.object.isRequired }

  render() {
    const { name, country } = this.props.mineSite;
    const { name: countryName } = country;

    return (
      <div className="c-mine-sites-detail-header">
        <style jsx>{styles}</style>
        <div className="l-layout">
          <div className="row">
            <div className="col-md-10">
              <div className="left-side">
                <Link
                  route="mine-sites"
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

            <div className="col-md-2">
              <div className="right-side">
                <div className="pdf-print">
                  <a
                    href="/documents/RMI_2018_report-WEB.pdf"
                    className="print-link"
                    download
                  >
                    <Icon
                      name="download"
                      className="-big -download -reverse"
                    />
                    Download in PDF
                  </a>
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
