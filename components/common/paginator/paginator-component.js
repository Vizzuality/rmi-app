import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Pagination from 'rc-pagination';

// styles
import styles from './paginator-styles.scss';

class Paginator extends PureComponent {
  static propTypes = {
    options: PropTypes.shape({
      size: PropTypes.number,
      page: PropTypes.number,
      limit: PropTypes.number
    }).isRequired,
    onChange: PropTypes.func.isRequired,
    className: PropTypes.string
  }

  static defaultProps = { className: null }

  handleChangePage = nextPage => this.props.onChange(nextPage);

  render() {
    const { options, className } = this.props;
    const { size, page, limit } = options;

    const paginatorClasses = classnames({
      'c-paginator': true,
      [className]: !!className
    });

    return (
      <div className={paginatorClasses}>
        <style jsx global>{styles}</style>
        <Pagination
          current={page}
          total={size}
          pageSize={limit}
          onChange={this.handleChangePage}
          hideOnSinglePage
        />
      </div>
    );
  }
}

export default Paginator;
