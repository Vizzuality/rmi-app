import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// components
import { SimpleSelect, MultiSelect } from 'react-selectize';

// styles
import styles from './select-styles.scss';

class SelectComponent extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([
        PropTypes.string, PropTypes.number
      ])
    })).isRequired,
    selectedValue: PropTypes.oneOfType([
      PropTypes.string, PropTypes.number
    ]),
    className: PropTypes.string,
    placeholder: PropTypes.oneOfType([
      PropTypes.string, PropTypes.number
    ]),
    multiple: PropTypes.bool,
    theme: PropTypes.oneOf([
      'light', 'dark'
    ])
  }

  static defaultProps = {
    className: null,
    selectedValue: null,
    placeholder: 'Select...',
    multiple: false,
    theme: 'dark'
  }

  constructor(props) {
    super(props);

    this.state = { search: '' };
  }

  handleSearch = (search) => {
    this.setState({ search });
  }

  handleChange = (selectedOption = {}) => {
    this.props.onChange(selectedOption);
  }

  render() {
    const { options, className, placeholder, theme, multiple, selectedValue } = this.props;
    const { search } = this.state;

    const selectClass = classnames({
      'c-select': true,
      [className]: !!className,
      [theme]: !!theme
    });

    const selectedOption = options.find(option => option.value === selectedValue);

    return (
      <div className={selectClass}>
        <style jsx global>{styles}</style>
        {!multiple && <SimpleSelect
          onValueChange={this.handleChange}
          options={options}
          placeholder={placeholder}
          className="selector"
          theme={theme}
          search={search}
          value={selectedOption}
          onSearchChange={this.handleSearch}
        />}

        {multiple &&
          <MultiSelect
            onValuesChange={this.handleChange}
            options={options}
            placeholder={placeholder}
            className="selector"
            theme={theme}
            search={search}
            onSearchChange={this.handleSearch}
          />
        }
      </div>
    );
  }
}

export default SelectComponent;
