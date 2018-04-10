import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'routes';

// styles
import styles from './modal-content-styles.scss';

class ModalContent extends PureComponent {
  static propTypes = {
    news: PropTypes.object
  }

  static defaultProps = { news: {} }

  render() {
    const { title, summary, text } = this.props.news;

    return (
      <div className="c-modal-content">
        <style jsx>{styles}</style>
        <h3 className="title">{title}</h3>
        <div dangerouslySetInnerHTML={{ __html: text }}></div>
      </div>
    );
  }
}

export default ModalContent;
