import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';

// components
import OverallGraphsItem from './overall-graphs-item';

// constants
import { GRAPHS_PER_ROW } from './overall-graphs-constants';

// styles
import styles from './overall-graphs-styles.scss';

class OverallGraphs extends PureComponent {
  static propTypes = { data: PropTypes.array.isRequired }

  static renderGraphRow(graphs, key) {
    return (
      <Fragment key={key} >
        <style jsx>{styles}</style>
        <div className="row">
          {graphs.map(graph => (
            <div key={graph.id} className="col-md-4">
              <OverallGraphsItem data={graph} />
            </div>
          ))}
        </div>
      </Fragment>
    );
  }

  renderGraphs() {
    const { data } = this.props;
    const totalRows = (data.length / GRAPHS_PER_ROW) > parseInt(data.length / GRAPHS_PER_ROW, 10) ?
      parseInt(data.length / GRAPHS_PER_ROW, 10) + 1 : parseInt(data.length / GRAPHS_PER_ROW, 10);
    const graphs = [];

    for (let i = 0; i < totalRows; i++) {
      const limit = ((i * GRAPHS_PER_ROW) + GRAPHS_PER_ROW);
      const slicedGraphs = data.slice(i * GRAPHS_PER_ROW, limit);
      graphs.push(OverallGraphs.renderGraphRow(slicedGraphs, i));
    }

    return graphs;
  }

  render() {
    return (
      <div className="c-overall-graphs">
        <style jsx>{styles}</style>
        <div className="graph-container">
          {this.renderGraphs()}
        </div>
        <div className="explanation">
          {/* <p>The maximum value of 1.000 represents the aggregation of best
            scores achieved for all indicators in a given thematic area,
            taking into account all companies&apos;s results. As the aggregate
            best score varies from one area to another, these charts
            cannot be used to compare company performances across
            different areas.
          </p> */}
          <p>All company results are based on public domain data that
            have been sourced by RMI analysts or provided by companies.
            In the case of a few companies, very little information was
            available. It is important to note that a low score
            cannot be assumed to equate to a lack of responsible
            behaviour; it may reflect a lack of relevant information
            in the company&apos;s publicly available documentation.
          </p>
        </div>

      </div>
    );
  }
}

export default OverallGraphs;
