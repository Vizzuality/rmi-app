import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// styles
import styles from './accordion-bar-styles.scss';

class AccordionBar extends PureComponent {
  static propTypes = {
    issueAreas: PropTypes.array.isRequired,
    setIssueArea: PropTypes.func.isRequired
  }

  render() {
    const { issueAreas, setIssueArea } = this.props;

    return (
      <div className="c-accordion-bar">
        <style jsx>{styles}</style>
        <ul>
          {issueAreas.map(issueArea => (
            <li key={issueArea.id}>
              <span
                onClick={() => setIssueArea(issueArea.id)}
              >
                {issueArea.code}
              </span>
              {/* <img
                src={`/static/icons/indicators/${issueArea.slug}.png`}
                alt={issueArea.slug}
                onClick={() => setIssueArea(issueArea.id)}
              /> */}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default AccordionBar;
