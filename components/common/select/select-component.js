import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// components
import { SimpleSelect } from 'react-selectize';

// styles
import styles from './select-styles.scss';

class SelectComponent extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })).isRequired,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    theme: PropTypes.oneOf([
      'light', 'dark'
    ]),
    defaultValue: PropTypes.object
  }

  static defaultProps = {
    placeholder: 'Select...',
    theme: 'dark',
    defaultValue: {}
  }

  constructor(props) {
    super(props);

    this.state = {
      search: ''
    };
  }

  handleSearch = (search) => {
    this.setState({ search });
  }

  handleChange = (selectedOption = {}) => {
    this.props.onChange(selectedOption);
  }

  render() {
    const {
      options, className, placeholder, theme, defaultValue
    } = this.props;
    const { search } = this.state;

    const selectClass = classnames({
      'c-select': true,
      [className]: !!className,
      [theme]: !!theme
    });

    return (
      <div className={selectClass}>
        <style jsx global>{styles}</style>
        <SimpleSelect
          onValueChange={this.handleChange}
          options={options}
          placeholder={placeholder}
          className="selector"
          theme={theme}
          value={defaultValue}
          search={search}
          onSearchChange={this.handleSearch}
        />
      </div>
    );
  }
}

export default SelectComponent;
