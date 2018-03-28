import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// styles
import styles from './companies-detail-summary-styles.scss';

class Summary extends PureComponent {
  static propTypes = { text: PropTypes.string.isRequired }

  render() {
    const { text } = this.props;
    return (
      <div className="c-summary">
        <style jsx>{styles}</style>
        <div className="row center-md -no-text-align">
          <div className="col-xs-12">
            <h3 className="title">Summary of results</h3>
            <div dangerouslySetInnerHTML={{ __html: text }}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Summary;
