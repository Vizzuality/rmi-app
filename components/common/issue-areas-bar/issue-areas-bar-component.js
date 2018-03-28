import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// components
import Icon from 'components/common/icon';

// constants
import { AREA_ISSUE_COLOURS } from 'constants/graph-colors';

// styles
import styles from './issue-areas-bar-styles.scss';

class IssueAreasBar extends PureComponent {
  static propTypes = {
    issueAreas: PropTypes.array.isRequired,
    selectedissueArea: PropTypes.string,
    setIssueArea: PropTypes.func.isRequired
  }

  static defaultProps = { selectedissueArea: null }

  getBackground(issueArea) {
    const { selectedissueArea } = this.props;

    return issueArea.id === selectedissueArea ?
      AREA_ISSUE_COLOURS[issueArea.slug] : 'transparent';
  }

  render() {
    const { issueAreas, setIssueArea } = this.props;

    return (
      <div className="c-issue-areas-bar">
        <style jsx>{styles}</style>
        <ul>
          {issueAreas.map(issueArea => (
            <li key={issueArea.id}>
              <button
                style={{ background: this.getBackground(issueArea) }}
                onClick={() => setIssueArea(issueArea.id)}
              >
                <Icon
                  name={issueArea.slug}
                  className="-x-big"
                />
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default IssueAreasBar;
