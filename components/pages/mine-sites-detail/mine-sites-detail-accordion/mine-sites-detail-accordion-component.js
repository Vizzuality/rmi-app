import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// components
import Accordion from 'components/common/accordion';
import ScoreComparison from 'components/common/score-comparison';

// constants
import { SCORE_COMPARISON_CONFIG } from 'components/common/score-comparison/score-comparison-constants';

class MineSitesDetailAccordion extends PureComponent {
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
        <div key={d.slug} className="category-block">
          <div className="row between-md">
            <div className="col-md-8">
              <h4 className="block-title">{d.name}</h4>
            </div>
            <div className="col-md-3">
              <ScoreComparison
                data={{
                  avg: d.avg,
                  max: d.max,
                  value: d.value
                }}
                config={{ color: SCORE_COMPARISON_CONFIG['mine-sites'] }}
              />
            </div>
          </div>
        </div>
      )));
  }

  render() {
    const { data } = this.props;

    return (
      <div className="c-mine-sites-detail-accordion">
        <Accordion
          data={data}
          contentRenderer={MineSitesDetailAccordion.renderContent}
        />
      </div>
    );
  }
}

export default MineSitesDetailAccordion;
