import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// styles
import styles from './custom-tooltip-styles.scss';

class CustomTooltip extends PureComponent {
  static propTypes = {
    payload: PropTypes.array.isRequired,
    companies: PropTypes.array.isRequired
  }

  render() {
    const { payload, companies } = this.props;

    if (payload[0] && payload[0].payload.currentCompany) {
      return (
        <div className="c-custom-tooltip">
          <style jsx>{styles}</style>
          {(companies.find((company) => company['id'] === payload[0].payload.id).currentCompanyName)}
        </div>
      );
    }

    return null;
  }
}

export default CustomTooltip;
