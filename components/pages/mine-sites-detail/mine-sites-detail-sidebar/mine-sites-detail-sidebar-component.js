import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class MineSitesDetailSidebar extends PureComponent {
  static propTypes = { mineSite: PropTypes.object.isRequired }

  render() {
    const {
      aliases,
      miningType,
      products,
      openingYear,
      acquisitionYear,
      company,
      companyShare
    } = this.props.mineSite;

    return (
      <div className="c-detail-sidebar">
        <div className="definitions-container">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <div className="definition-item">
                <div className="definition-key">Aliases:</div>
                <div className="definition-value">{aliases || '-'}</div>
              </div>
            </div>
            <div className="col-xs-12 col-md-6">
              <div className="definition-item">
                <div className="definition-key">Mining Type/s:</div>
                <div className="definition-value">{miningType || '-'}</div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <div className="definition-item">
                <div className="definition-key">Products:</div>
                <div className="definition-value">{products || '-'}</div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <div className="definition-item">
                <div className="definition-key">Opening Year:</div>
                <div className="definition-value">{openingYear || '-'}</div>
              </div>
            </div>
            <div className="col-xs-12 col-md-6">
              <div className="definition-item">
                <div className="definition-key">Acquisition Year:</div>
                <div className="definition-value">{acquisitionYear || '-'}</div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <div className="definition-item">
                <div className="definition-key">Company:</div>
                <div className="definition-value">{company || '-'}</div>
              </div>
            </div>
            <div className="col-xs-12 col-md-6">
              <div className="definition-item">
                <div className="definition-key">Company&apos;s Share (%):</div>
                <div className="definition-value">{companyShare || '-'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MineSitesDetailSidebar;
