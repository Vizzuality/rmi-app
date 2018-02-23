import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// components
import Select from 'components/common/select';

// styles
import styles from './companies-filters-styles.scss';

class CompaniesFilters extends PureComponent {
  static propTypes = {
    countries: PropTypes.array.isRequired,
    commodities: PropTypes.array.isRequired,
    setFilters: PropTypes.func.isRequired
  }

  handleCountry = (selectedOption = {}) =>
    this.props.setFilters({ country: selectedOption.value })

  handleCommodity = (selectedOption = {}) =>
    this.props.setFilters({ commodity: selectedOption.value })

  render() {
    const { countries, commodities } = this.props;

    return (
      <div className="c-companies-filters">
        <style jsx>{styles}</style>
        <Select
          placeholder="Select a home country"
          options={countries}
          theme="light"
          onChange={this.handleCountry}
        />
        <Select
          placeholder="Select a commodity"
          options={commodities}
          theme="light"
          onChange={this.handleCommodity}
        />
      </div>
    );
  }
}

export default CompaniesFilters;
