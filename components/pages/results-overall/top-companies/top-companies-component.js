import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';

// components
import Spinner from 'components/common/spinner';
import TopCompany from './top-companies-item';

// constants
import { TOPS_PER_ROW } from './top-companies-constants';

// styles
import styles from './top-companies-styles.scss';

class TopCompanies extends PureComponent {
  static propTypes = { data: PropTypes.array.isRequired }

  static renderGraphRow(tops, key) {
    return (
      <Fragment key={key} >
        <style jsx>{styles}</style>
        <div className="row">
          {tops.map(top => (
            <div key={top.id} className="col-xs-12 col-md-4">
              <TopCompany data={top} />
            </div>
          ))}
        </div>
      </Fragment>
    );
  }

  renderTops() {
    const { data } = this.props;
    const totalRows = (data.length / TOPS_PER_ROW) > parseInt(data.length / TOPS_PER_ROW, 10) ?
      parseInt(data.length / TOPS_PER_ROW, 10) + 1 : parseInt(data.length / TOPS_PER_ROW, 10);
    const graphs = [];

    for (let i = 0; i < totalRows; i++) {
      const limit = ((i * TOPS_PER_ROW) + TOPS_PER_ROW);
      const slicedGraphs = data.slice(i * TOPS_PER_ROW, limit);
      graphs.push(TopCompanies.renderGraphRow(slicedGraphs, i));
    }

    return graphs;
  }

  render() {
    const topCompanies = this.renderTops();

    return (
      <div className="c-top-companies">
        <style jsx>{styles}</style>
        <div className="container">
          <div className="title">
            <h2>Companies achieving the ten best scores for each thematic area</h2>
          </div>
          {topCompanies.length ?
            topCompanies : <Spinner />}
        </div>
      </div>
    );
  }
}

export default TopCompanies;
