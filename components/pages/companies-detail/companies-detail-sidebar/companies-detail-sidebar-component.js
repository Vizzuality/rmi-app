import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// styles
import styles from './companies-detail-sidebar-styles.scss';

class CompaniesDetailSidebar extends PureComponent {
  static propTypes = { company: PropTypes.array.isRequired }

  render() {
    const { company } = this.props;
    const { name } = company[0] || {};

    return (
      <div className="c-companies-detail-sidebar">
        <style jsx>{styles}</style>
        {name}
      </div>
    );
  }
}

export default CompaniesDetailSidebar;
