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
    filters: PropTypes.object.isRequired,
    setFilters: PropTypes.func.isRequired,
    resetFilters: PropTypes.func.isRequired
  }

  componentWillUnmount() {
    this.props.resetFilters();
  }

  handleCountry = (selectedOption = {}) =>
    this.props.setFilters({ country: selectedOption.value })

  handleCommodities = (selectedOptions = []) => {
    const commodities = selectedOptions.length ?
      selectedOptions.map(option => option.value) : undefined;
    this.props.setFilters({ commodities });
  }

  render() {
    const { countries, commodities, filters } = this.props;
    const { country } = filters;

    return (
      <div className="c-companies-filters">
        <style jsx>{styles}</style>
        <Select
          placeholder="Select a home country"
          options={countries}
          theme="light"
          selectedValue={country}
          onChange={this.handleCountry}
        />
        <Select
          placeholder="Select a commodity"
          options={commodities}
          multiple
          theme="light"
          onChange={this.handleCommodities}
        />
      </div>
    );
  }
}

export default CompaniesFilters;
