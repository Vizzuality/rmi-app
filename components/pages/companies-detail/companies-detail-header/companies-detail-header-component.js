import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'routes';

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
            <div className="col-md-6">
              <div className="left-side">
                <Link
                  route="companies"
                >
                  <a className="go-back-link">{name}</a>
                </Link>
              </div>
            </div>
            <div className="col-md-6">
              <div className="right-side">
                <div className="company-listing">
                  {parsedListings.map(list => (
                    <div className="company-listing-item">
                      <span className="company-listing-item-key">{list[0]}:</span>
                      <span className="company-listing-item-value">{list[1]}</span>
                    </div>
                  ))}
                </div>

                <div className="pdf-print">
                  {/* icon here */}
                  <a href="#" className="print-link">Download in PDF</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CompaniesDetailHeader;
