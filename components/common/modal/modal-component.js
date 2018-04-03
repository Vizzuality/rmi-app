import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';

// components
import Modal from 'react-modal';
import Icon from 'components/common/icon';

class CustomModal extends PureComponent {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    header: PropTypes.node,
    onAfterOpen: PropTypes.func,
    onRequestClose: PropTypes.func.isRequired
  }

  render() {
    const {
      isOpen,
      className,
      header,
      onRequestClose
    } = this.props;

    return (
      <div className="c-modal">
        <Modal
          className="modal"
          overlayClassName="c-modal-overlay"
          bodyOpenClassName="-no-scroll"
          isOpen={isOpen}
          ariaHideApp={false}
          onAfterOpen={this.props.onAfterOpen}
          onRequestClose={onRequestClose}
        >
          {header}
          <button
            className="modal-close"
            onClick={onRequestClose}
          >
            <Icon name="cross" className="-small" />
          </button>

          <div className="modal-content">
            {this.props.children}
          </div>
        </Modal>
      </div>
    );
  }
}

export default CustomModal;
