import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// components
import Icon from 'components/common/icon';
import ScoreComparison from 'components/common/score-comparison';

// constants
import { AREA_ISSUE_COLOURS } from 'constants/graph-colors';

// styles
import styles from './printable-issue-areas-styles.scss';

class PrintableIssueAreas extends PureComponent {
  static propTypes = { issueAreasList: PropTypes.array }

  static defaultProps = { issueAreasList: [] }

  render() {
    const { issueAreasList } = this.props;

    return (
      <div className="c-printable-issue-areas">
        <style jsx>{styles}</style>
        <div className="row">
          <div className="col-xs-12">
            {issueAreasList.map(issueArea => (
              <ul
                className="issue-area-list"
                key={issueArea.id}
              >
                <li>
                  <div className="page-break" />
                  <div className="issue-area-header">
                    <button style={{ background: AREA_ISSUE_COLOURS[issueArea.id] }}>
                      <Icon
                        name={issueArea.id}
                        className="-x-big"
                      />
                    </button>
                    <h2 className="issue-area-title">{issueArea.name}</h2>
                  </div>
                  <ul className="issue-areas-indicators-list">
                    {issueArea.data.map(indicator => (
                      <li
                        className="issue-areas-indicators-list"
                        key={indicator.id}
                      >
                        <div className="issue-areas-indicators-header">
                          <h3 className="issue-areas-indicators-title">{indicator.name}</h3>
                        </div>
                        <ul className="issue-areas-indicators-children-list">
                          {indicator.children.map(child => (
                            <div key={child.slug} className="indicator-child-block">
                              <div className="row center-sm between-md -no-text-align">
                                <div className="col-xs-12 col-md-8">
                                  <h4 className="indicator-child-title">{child.name}</h4>
                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-3">
                                  <ScoreComparison
                                    data={{
                                      avg: child.avg,
                                      max: child.max,
                                      value: child.value
                                    }}
                                    config={{ color: child.color }}
                                  />
                                </div>
                              </div>
                            </div>
                          ))}
                        </ul>
                      </li>
                    ))}

                  </ul>
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default PrintableIssueAreas;
