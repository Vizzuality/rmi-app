import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'routes';

// components
import Icon from 'components/common/icon';

// styles
import styles from './companies-detail-header-styles.scss';

class CompaniesDetailHeader extends PureComponent {
  static propTypes = { company: PropTypes.array.isRequired }

  render() {
    const { company } = this.props;
    const { name, listings } = company[0] || {};
    const parsedListings = (listings || '').split(' - ')
      .map(list => list.split(':'));

    return (
      <div className="c-companies-detail-header">
        <style jsx>{styles}</style>
        <div className="l-layout">
          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <div className="left-side">
                <Link
                  route="companies"
                >
                  <a className="go-back-link">
                    <Icon
                      name="large-arrow"
                      className="-large-arrow"
                    />
                    {name}
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6">
              <div className="right-side">
                <div className="company-listing">
                  {parsedListings.map((list, index) => (
                    <div key={`${list[0]}-${index + 1}`} className="company-listing-item">
                      <span className="company-listing-item-key">{list[0]}:</span>
                      <span className="company-listing-item-value">{list[1]}</span>
                    </div>
                  ))}
                </div>
                {/* <div className="pdf-print">
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
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CompaniesDetailHeader;
