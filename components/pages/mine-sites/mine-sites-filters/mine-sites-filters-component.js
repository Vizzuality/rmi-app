import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// components
import Select from 'components/common/select';

// styles
import styles from './mine-sites-filters-styles.scss';

class MineSitesFilters extends PureComponent {
  static propTypes = {
    selectedMineSite: PropTypes.string,
    mineSites: PropTypes.array.isRequired,
    setFilters: PropTypes.func.isRequired
  }

  static defaultProps = { selectedMineSite: null }

  handleMineSite = ({ value }) =>
    this.props.setFilters({
      selectedMineSite: value,
      selectedCompany: null
    })

  render() {
    const { mineSites, selectedMineSite } = this.props;

    return (
      <div className="c-mine-sites-filters">
        <style jsx>{styles}</style>
        <Select
          placeholder="Select a mine site"
          options={mineSites}
          theme="light"
          selectedValue={selectedMineSite}
          onChange={this.handleMineSite}
        />
      </div>
    );
  }
}

export default MineSitesFilters;
