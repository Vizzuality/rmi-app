import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// components
import Search from 'components/common/search';
import Select from 'components/common/select';

// styles
import styles from './library-filters-styles.scss';

class LibraryFilters extends PureComponent {
  static propTypes = {
    companies: PropTypes.array.isRequired,
    setSearch: PropTypes.func.isRequired,
    setFilters: PropTypes.func.isRequired,
    setPaginationPage: PropTypes.func.isRequired
  }

  handleSearch = (value) => {
    this.props.setPaginationPage(1);
    this.props.setSearch(value);
  }

  handleCompany = ({ value }) => {
    this.props.setPaginationPage(1);
    this.props.setFilters({ company: value });
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LibraryFilters;
