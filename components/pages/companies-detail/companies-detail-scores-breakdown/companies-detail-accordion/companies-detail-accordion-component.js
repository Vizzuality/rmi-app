import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Accordion from 'components/common/accordion';

// components
import ScoreComparison from 'components/common/score-comparison';
import IssueAreasBar from 'components/common/issue-areas-bar';

// styles
import styles from './companies-detail-accordion-styles.scss';

class CompaniesDetailAccordion extends PureComponent {
  static propTypes = {
    issueAreaTree: PropTypes.object.isRequired,
    selectedIssueArea: PropTypes.string.isRequired,
    setIssueArea: PropTypes.func.isRequired
  }

  static renderContent(data = []) {
    if (!data.length) {
      return (
        <div className="category-block">
          <style jsx>{styles}</style>
          <span>No data available</span>
        </div>
      );
    }

    return (
      data.map(d => (
        <div key={d.slug} className="category-block">
          <style jsx>{styles}</style>
          <div className="row center-sm between-md -no-text-align">
            <div className="col-xs-12 col-md-8">
              <h4 className="block-title">{d.name}</h4>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3">
              <ScoreComparison
                data={{
                  avg: d.avg,
                  max: d.max,
                  value: d.value
                }}
                config={{ color: d.color }}
              />
            </div>
          </div>
        </div>
      )));
  }

  render() {
    const { issueAreaTree, selectedIssueArea, setIssueArea } = this.props;

    return (
      <div className="c-companies-detail-accordion">
        <style jsx>{styles}</style>
        <div className="row">
          <div className="col-xs-12 col-md-1">
            <IssueAreasBar
              selectedissueArea={selectedIssueArea}
              setIssueArea={setIssueArea}
            />
          </div>
          <div className="col-xs-12 col-md-11">
            <h2 className="parent-category-title">{issueAreaTree.name}</h2>
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
