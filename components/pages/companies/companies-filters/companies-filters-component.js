import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// components
import Select from 'components/common/select';

// styles
import styles from './companies-filters-styles.scss';

class CompaniesFilters extends PureComponent {
  static propTypes = {
    countries: PropTypes.array.isRequired,
    commodities: PropTypes.array.isRequired,
    filters: PropTypes.object.isRequired,
    responsive: PropTypes.object.isRequired,
    className: PropTypes.string,
    setFilters: PropTypes.func.isRequired,
    resetFilters: PropTypes.func.isRequired
  }

  static defaultProps = { className: null }

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
    const { countries, commodities, filters, responsive, className } = this.props;
    const { country } = filters;
    const { mobile, tablet } = responsive;

    const componentClass = classnames({
      'c-companies-filters': true,
      [className]: !!className
    });

    const filtersClass = classnames({ '-underline': mobile && !tablet });

    return (
      <div className={componentClass}>
        <style jsx>{styles}</style>
        <Select
          placeholder="Select a home country"
          options={countries}
          theme="light"
          className={filtersClass}
          selectedValue={country}
          onChange={this.handleCountry}
        />
        <Select
          placeholder="Select a commodity"
          options={commodities}
          multiple
          theme="light"
          className={filtersClass}
          onChange={this.handleCommodities}
        />
      </div>
    );
  }
}

export default CompaniesFilters;
