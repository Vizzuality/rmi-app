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
          <p><span className="aggregation-line">- - - -</span> Aggregation of best scores for all indicators in the given thematic area.</p>
          <p>The &apos;Current Best Practice&apos; value represents the aggregation of best
            scores achieved for all indicators in the given thematic area, taking into
            account all companies&apos; results.<br /> The maximum value of 6.0
            represents the maximum achievable score
          </p>
        </div>

      </div>
    );
  }
}

export default OverallGraphs;
