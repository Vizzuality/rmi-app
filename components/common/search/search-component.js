import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';

// components
import Icon from 'components/common/icon';

// styles
import styles from './search-styles.scss';

class Search extends PureComponent {
  static propTypes = {
    onSearch: PropTypes.func.isRequired,
    placeholder: PropTypes.string
  }

  static defaultProps = { placeholder: 'Search for a text...' }

  constructor(props) {
    super(props);

    this.handleSearch = debounce(this.props.onSearch, 300);
  }

  render() {
    const { placeholder } = this.props;

    return (
      <div className="c-search">
        <style jsx>{styles}</style>
        <Icon name="search" />
        <input
          type="text"
          placeholder={placeholder}
          onChange={event => this.handleSearch(event.target.value)}
        />
      </div>
    );
  }
}

export default Search;
