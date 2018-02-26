import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Provider, Header, Body } from 'reactabular-table';
// utils
import resolveScopedStyles from 'utils/classnames';

// styles
import styles from './table-styles.scss';

class Table extends PureComponent {
  static propTypes = {
    columns: PropTypes.array.isRequired,
    rows: PropTypes.array.isRequired,
    rowKey: PropTypes.string,
    className: PropTypes.string
  }

  static defaultProps = {
    rowKey: 'id',
    className: null
  }

  constructor(props) {
    super(props);

    this.scoped = resolveScopedStyles(
      <scope>
        <style jsx>{styles}</style>
      </scope>
    );
  }

  render() {
    const { columns, rows, rowKey, className } = this.props;

    const tableClasses = classnames({
      'c-table': true,
      [this.scoped.className]: true,
      [className]: !!className
    });

    return (
      <div className="table-container">
        {this.scoped.styles}
        <Provider
          columns={columns}
          className={tableClasses}
        >
          <Header />
          <Body rows={rows} rowKey={rowKey} />
        </Provider>
      </div>
    );
  }
}

export default Table;
