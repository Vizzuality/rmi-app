import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Accordion from 'components/common/accordion';

class ResultsDetailAccordion extends PureComponent {
  static propTypes = { data: PropTypes.array.isRequired }

  static renderContent(data = []) {
    if (!data.length) {
      return (
        <div className="category-block">
          <span>No data available</span>
        </div>
      );
    }

    return (
      data.map(d => (
        <div key={d.id} className="category-block">
          <div className="row between-md">
            <div className="col-md-8">
              <h4 className="block-title">{d.name}</h4>
              {d.observation &&
                <div className="block-section">
                  <h5 className="block-section-name">Observation</h5>
                  <p>{d.observation}</p>
                </div>}
            </div>
            <div className="col-md-3" />
          </div>
        </div>
      )));
  }

  render() {
    const { data } = this.props;
    return (
      <div className="c-results-detail-accordion">
        <Accordion
          data={data}
          contentRenderer={ResultsDetailAccordion.renderContent}
        />
      </div>
    );
  }
}

export default ResultsDetailAccordion;
