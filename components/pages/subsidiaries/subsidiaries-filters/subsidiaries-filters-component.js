import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// components
import Search from 'components/common/search';

// styles
import styles from './subsidiaries-filters-styles.scss';

class SubsidiariesFilters extends PureComponent {
  static propTypes = {
    setSearch: PropTypes.func.isRequired,
    setPaginationPage: PropTypes.func.isRequired
  }

  handleSearch = (value) => {
    this.props.setPaginationPage(1);
    this.props.setSearch(value);
  }

  render() {
    return (
      <div className="c-subsidiaries-filters">
        <style jsx>{styles}</style>
        <div className="row middle-md">
          <div className="col-xs-12">
            <div className="filters-container">
              <Search
                onSearch={this.handleSearch}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SubsidiariesFilters;
