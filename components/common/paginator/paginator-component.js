import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
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
    onChange: PropTypes.func.isRequired
  }

  handleChangePage = nextPage => this.props.onChange(nextPage);

  render() {
    const { size, page, limit } = this.props.options;

    return (
      <div className="c-paginator">
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
