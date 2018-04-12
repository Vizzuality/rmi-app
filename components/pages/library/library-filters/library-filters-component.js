import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// components
import Search from 'components/common/search';
import Select from 'components/common/select';

// constants
import { TABLE_SIZE_VALUES } from './library-filters-constants';

// styles
import styles from './library-filters-styles.scss';

class LibraryFilters extends PureComponent {
  static propTypes = {
    companies: PropTypes.array.isRequired,
    setSearch: PropTypes.func.isRequired,
    setFilters: PropTypes.func.isRequired,
    setPaginationPage: PropTypes.func.isRequired,
    setPaginationLimit: PropTypes.func.isRequired,
    resetPagination: PropTypes.func.isRequired
  }

  handleSearch = (value) => {
    this.props.setPaginationPage(1);
    this.props.setSearch(value);
  }

  handleCompany = ({ value }) => {
    this.props.setPaginationPage(1);
    this.props.setFilters({ company: value });
  }

  handleSize = ({ value }) => {
    if (value == null) {
      this.props.resetPagination();
    } else {
      this.props.setPaginationLimit(value);
      this.props.setPaginationPage(1);
    }
  }

  render() {
    const { companies } = this.props;

    return (
      <div className="c-library-filters">
        <style jsx>{styles}</style>
        <div className="row middle-md">
          <div className="col-xs-12">
            <div className="filters-container">
              <Search
                onSearch={this.handleSearch}
              />

              <Select
                placeholder="Select a Company"
                options={companies}
                onChange={this.handleCompany}
              />

              <Select
                placeholder="Select quantity"
                options={TABLE_SIZE_VALUES}
                onChange={this.handleSize}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LibraryFilters;
