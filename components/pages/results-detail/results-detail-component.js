import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Router } from 'routes';

// components
import Select from 'components/common/select';
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
    const { route, params } = query;
    Router.pushRoute(route, params);
  }

  handleArea = areaId => Router.pushRoute('results', { section: 'thematic', id: areaId })

  render() {
    const { issueAreas, selectedArea } = this.props;
    const { observation, slug, id } = selectedArea || {};


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
                  <p>{observation}</p>}
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
                  <div className="summary">
                    <h3 className="summary-title">Summary of results</h3>
                    <p>The assessment results reveal only a small proportion of companies
                      systematically addressing these issues. Three companies ([Company-I],
                      [Company-D1 ] and [Company-D]) significantly outperform their peers.
                      These companies tend to have well-developed corporate-level systems
                      (typically guidelines or management standards) and programmes to
                      support procurement, capacity building and skills development at
                      a national level. Interestingly, three companies that are among
                      the ten strongest performers for only Economic Development
                      (namely [Company-N], [Company-C1] and [Company-X]) show some
                      of the strongest results for one issue in particular: skills
                      development. These companies show evidence of taking a
                      systematic approach to enhancing the national skills base
                      and employability of local populations around their mine sites.
                    </p>
                    <p>Leading practices in Economic Development generally involve collaborative
                      partnerships between mining companies and in-country organisations,
                      with an explicit capacity-building element to strengthen the
                      organisations involved. This includes, for example, partnerships
                      with government authorities for collaborative planning of
                      development initiatives. On the whole though, these innovative
                      approaches are generally found in one or two producing countries,
                      rather than across all countries where the company in
                      question is operating. And many companies show little
                      or no evidence of taking a national-level perspective
                      to catalysing socio-economic development. Other performance gaps
                      identified in Economic Development include a general lack of evidence
                      of companies systematically tracking the effectiveness of their measures
                      to develop procurement opportunities for producing country suppliers
                      beyond those located in the immediate vicinity of their
                      mining operations.
                    </p>
                  </div>
                  <Accordion />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default ResultsDetail;
