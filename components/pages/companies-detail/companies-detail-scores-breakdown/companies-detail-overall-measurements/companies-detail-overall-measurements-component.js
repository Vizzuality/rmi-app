import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// components
import Bars from 'components/charts/barschart';

// constants
import { CHART_CONFIG } from './companies-detail-overall-measurements-constants';

// styles
import styles from './companies-detail-overall-measurements-styles.scss';


class CompaniesDetailOverallMeasurements extends PureComponent {
  static propTypes = { data: PropTypes.array.isRequired }

  render() {
    const { data } = this.props;

    return (
      <div className="c-companies-detail-overall-measurements">
        <style jsx>{styles}</style>
        <div className="row">
          <div className="col-xs-12">
            <h3 className="title">Overall measurement area ranking</h3>
          </div>
        </div>
        <div className="charts-container">
          <div className="row">
            {data.map(d => (
              <div key={d.id} className="col-xs-12 col-md-4">
                <Bars
                  config={CHART_CONFIG}
                  data={d.children}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default CompaniesDetailOverallMeasurements;
