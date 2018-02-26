import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// components
import Accordion from 'components/common/accordion';

// styles
import styles from './mine-sites-detail-accordion-styles.scss';

class MineSitesDetailAccordion extends PureComponent {
  static propTypes = { data: PropTypes.array.isRequired }

  static renderContent(data = []) {
    if (!data.length) {
      return (
        <div className="mine-site-indicator-section">
          <style jsx>{styles}</style>
          <span>No data available</span>
        </div>
      );
    }

    return (
      data.map(d => (
        <div key={d.slug} className="mine-site-indicator-section">
          <style jsx>{styles}</style>
          <div className="row between-md">
            <div className="col-md-8">
              <h4 className="mine-site-indicator-title">{d.name}</h4>
            </div>
            <div className="col-md-3" />
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
