import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'routes';

// styles
import styles from './modal-content-styles.scss';

class ModalContent extends PureComponent {
  static propTypes = {
    mediaRelease: PropTypes.object
  }

  static defaultProps = { mediaRelease: {} }

  render() {
    const { title, subtitle, summary, text } = this.props.mediaRelease;

    return (
      <div className="c-modal-content">
        <style jsx>{styles}</style>
        <h3 className="title">{title}</h3>
        <h3 className="subtitle">{subtitle}</h3>
        <div dangerouslySetInnerHTML={{ __html: text }}></div>
      </div>
    );
  }
}

export default ModalContent;
