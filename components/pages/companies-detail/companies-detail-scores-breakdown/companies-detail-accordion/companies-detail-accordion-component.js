import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Accordion from 'components/common/accordion';

// components
import AccordionBar from './accordion-bar';


// styles
import styles from './companies-detail-accordion-styles.scss';


class CompaniesDetailAccordion extends PureComponent {
  static propTypes = { issueAreaTree: PropTypes.object.isRequired }

  static renderContent(data = []) {
    if (!data.length) {
      return (
        <div className="indicator-section">
          <style jsx>{styles}</style>
          <span>No data available</span>
        </div>
      );
    }

    return (
      data.map(d => (
        <div key={d.slug} className="indicator-section">
          <style jsx>{styles}</style>
          <div className="row between-md">
            <div className="col-md-8">
              <h4 className="indicator-title">{d.name}</h4>
            </div>
            <div className="col-md-3" />
          </div>
        </div>
      )));
  }

  render() {
    const { issueAreaTree } = this.props;

    return (
      <div className="c-companies-detail-accordion">
        <style jsx>{styles}</style>
        <div className="row">
          <div className="col-md-1">
            <AccordionBar />
          </div>
          <div className="col-md-11">
            <h2 className="category-title">{issueAreaTree.name}</h2>
            <Accordion
              data={issueAreaTree.data}
              contentRenderer={CompaniesDetailAccordion.renderContent}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default CompaniesDetailAccordion;
