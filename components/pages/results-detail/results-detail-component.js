import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Router } from 'routes';

// components
import Select from 'components/common/select';
import Summary from 'components/common/summary';
import Spinner from 'components/common/spinner';
import IssueAreasBar from 'components/common/issue-areas-bar';
import Accordion from './accordion';
import OverallChart from './overall-chart';
import MeasurementCharts from './measurement-charts';

// styles
import styles from './results-detail-styles.scss';

class ResultsDetail extends PureComponent {
  static propTypes = {
    selectedArea: PropTypes.object.isRequired,
    issueAreas: PropTypes.array.isRequired
  }

  handleAreaSelection = ({ query }) => {
    const { route, params } = query || this.props.issueAreas[0].query;
    Router.pushRoute(route, params);
  }

  handleArea = areaId => Router.pushRoute('results', { section: 'thematic', id: areaId })

  render() {
    const { issueAreas, selectedArea } = this.props;
    const { observation, slug, id, summary } = selectedArea || {};

    return (
      <div className="c-results-detail-page">
        <style jsx>{styles}</style>
        <div className="page-intro">
          <div className="l-layout">
            <div className="row">
              <div className="col-md-6">
                <h2 className="title">Results</h2>
                <Select
                  onChange={this.handleAreaSelection}
                  options={issueAreas}
                  placeholder="Select an issue area"
                  selectedValue={slug}
                  className="-underline"
                />
              </div>
              <div className="col-md-6">
                {observation &&
                  <div dangerouslySetInnerHTML={{ __html: observation }} />}
              </div>
            </div>
          </div>
        </div>

        <div className="page-content">
          <section className="section -dark">
            <div className="l-layout">
              <div className="row">
                <div className="col-md-1">
                  <IssueAreasBar
                    selectedissueArea={id}
                    setIssueArea={this.handleArea}
                  />
                </div>
                {!Object.keys(selectedArea).length && <Spinner />}
                {!!Object.keys(selectedArea).length &&
                  <div className="col-md-11">
                    <OverallChart />
                    <MeasurementCharts />
                    <div className="explanation">
                      <p>The maximum value of 1.000 represents the aggregation of best
                        scores achieved for all indicators in a given thematic area, taking
                        into account all companies&apos; results.
                      </p>
                      <p>All company results are based on public domain data that have been sourced by
                        RM1 analysts or provided by companies. In the case of a few companies
                        very little information was available. It is important to note that a
                        low score cannot be ssumed to equate to a lack of responsible behaviour
                        it may reflect a lack of relevant information in the company&apos;s
                        publicly available documentation.
                      </p>
                    </div>
                    {summary &&
                      <Summary
                        title="Summary of results"
                        content={summary}
                        theme="dark"
                      />}
                    <Accordion />
                  </div>}
                </div>
              </div>
            </section>
        </div>
      </div>
    );
  }
}

export default ResultsDetail;
