import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// components
import Bars from 'components/charts/barschart';

// constants
import { CHART_CONFIG } from './mine-sites-detail-bars-constants';

// styles
import styles from './mine-sites-detail-bars-styles.scss';

class MineSitesDetailBars extends PureComponent {
  static propTypes = {
    overallScore: PropTypes.number.isRequired,
    data: PropTypes.array.isRequired
  }

  render() {
    const { data, overallScore } = this.props;

    return (
      <div className="c-mine-sites-detail-bars">
        <style jsx>{styles}</style>
        <div className="row">
          <div className="col-xs-12">
            <div className="overall-core-score-container">
              <span className="overall-score-title">Mine Site Score</span>
              <span className="overall-score-value"><span className="current">{overallScore}</span> / 6.00</span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <div className="score-bars-container">
              <Bars
                data={data}
                config={CHART_CONFIG}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MineSitesDetailBars;
