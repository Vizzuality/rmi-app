import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// components
import MediaReleasesCardList from './media-releases-card-list';
import Modal from 'components/common/modal';
import ModalContent from './modal-content';

class Media extends PureComponent {
  static propTypes = {
    content: PropTypes.object.isRequired,
    toggleModal: PropTypes.func.isRequired,
    setResourceId: PropTypes.func.isRequired,
    modalOpen: PropTypes.bool.isRequired
  }

  closeModal = () => {
    this.props.toggleModal(false);
    this.props.setResourceId(null);
  }

  render() {
    const { content, modalOpen } = this.props;
    const { title, summary } = content;

    return (
      <div className="c-contact">
        <div className="page-intro">
          <div className="l-layout">
            <div className="row">
              <div className="col-md-6">
                <h2 className="title">{title}</h2>
              </div>
              <div className="col-md-6">
                <p>{summary}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="page-content">
          <section className="section -gray">
            <div className="l-layout">
              <MediaReleasesCardList />
            </div>
          </section>
        </div>
        <Modal
          isOpen={modalOpen}
          onRequestClose={this.closeModal}
        >
          <ModalContent />
        </Modal>
      </div>
    );
  }
}

export default Media;
