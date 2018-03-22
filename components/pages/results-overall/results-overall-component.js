import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Router } from 'routes';

// components
import Select from 'components/common/select';
import OverallGraph from './overall-graphs';
import TopCompanies from './top-companies';

class ResultsOverall extends PureComponent {
  static propTypes = { issueAreas: PropTypes.array.isRequired }

  handleAreaSelection = ({ query }) => {
    const { route, params } = query;
    Router.pushRoute(route, params);
  }

  render() {
    const { issueAreas } = this.props;
    return (
      <div className="c-results-overall-page">
        <div className="page-intro">
          <div className="l-layout">
            <div className="row">
              <div className="col-md-6">
                <h2 className="title">Results</h2>

                <Select
                  onChange={this.handleAreaSelection}
                  options={issueAreas}
                  placeholder="Select an issue area"
                  className="-underline -big"
                />
              </div>
              <div className="col-md-6">
                <p>Performances of the 30 companies vary widely within each of the
                  thematic areas of the Index. Many companies are performing relatively
                  well in certain areas and leading practices are found even on issues
                  for which performances are generally weak. At the same time, performance
                  levels indicate clear potential for companies to continuously improve
                  their policies and practices on the EESG issues represented
                  in all thematic areas.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="page-content">
          <section className="section -dark">
            <div className="l-layout">
              <div className="row">
                <div className="col-xs-12">
                  {/* Overall charts */}
                  <TopCompanies />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default ResultsOverall;
