import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// styles
import styles from './summary-styles.scss';

class Summary extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    content: PropTypes.string.isRequired,
    theme: PropTypes.oneOf([
      'light', 'dark'
    ])
  }

  static defaultProps = {
    title: null,
    theme: 'light'
  }

  render() {
    const { title, content, theme } = this.props;
    const summaryClass = classnames({
      'c-summary': true,
      [theme]: !!theme
    });

    return (
      <div className={summaryClass}>
        <style jsx>{styles}</style>
        {title && <h2 className="title">{title}</h2>}
        <div dangerouslySetInnerHTML={{__html: content}}></div>
      </div>
    );
  }
}

export default Summary;
