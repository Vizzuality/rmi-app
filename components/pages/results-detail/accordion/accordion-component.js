import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Accordion from 'components/common/accordion';
import ScoreComparison from 'components/common/score-comparison';

class ResultsDetailAccordion extends PureComponent {
  static propTypes = {
    data: PropTypes.array.isRequired,
    responsive: PropTypes.object.isRequired
  }

  renderContent(data = []) {
    const { phone } = this.props.responsive;
    if (!data.length) {
      return (
        <div className="category-block">
          <span>No data available</span>
        </div>
      );
    }

    if (phone) {
      return (
        data.map(d => (
          <div key={d.id} className="category-block">
            <div className="row center-sm between-md -no-text-align">
              <div className="col-xs-12">
                <h4 className="block-title">{d.name}</h4>
                <ScoreComparison
                  data={{
                    avg: d.avg,
                    min: d.min,
                    max: d.max,
                    value: d.avg
                  }}
                  config={{
                    color: d.color,
                    hideInnerValue: true
                  }}
                />
              </div>
              <div className="col-xs-12">
                {d.summary &&
                  <div className="block-section">
                    <h5 className="block-section-name">Observation</h5>
                    <div dangerouslySetInnerHTML={{ __html: d.summary }} />
                  </div>}
              </div>
            </div>
          </div>
        )));
    }

    return (
      data.map(d => (
        <div key={d.id} className="category-block">
          <div className="row center-sm between-md -no-text-align">
            <div className="col-xs-12 col-md-8">
              <h4 className="block-title">{d.name}</h4>
              {d.summary &&
                <div className="block-section">
                  <h5 className="block-section-name">Observation</h5>
                  <div dangerouslySetInnerHTML={{ __html: d.summary }} />
                </div>}
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3">
              <ScoreComparison
                data={{
                  avg: d.avg,
                  min: d.min,
                  max: d.max,
                  value: d.avg
                }}
                config={{
                  color: d.color,
                  hideInnerValue: true
                }}
              />
            </div>
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
          contentRenderer={d => this.renderContent(d)}
        />
      </div>
    );
  }
}

export default ResultsDetailAccordion;
