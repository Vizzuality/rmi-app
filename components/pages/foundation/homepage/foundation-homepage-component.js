import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'routes';
import isEmpty from 'lodash/isEmpty';

// components
import Button from 'components/common/button';
import Modal from 'components/common/modal';
import CustomContent from 'components/common/custom-content';
import NewsSlider from './news-slider';
import ModalContent from './modal-content';

// styles
import styles from './foundation-homepage-styles.scss';

class FoundationHomepagePage extends PureComponent {
  static propTypes = {
    content: PropTypes.object.isRequired,
    news: PropTypes.array.isRequired,
    setResourceId: PropTypes.func.isRequired,
    modalOpen: PropTypes.bool.isRequired,
    toggleModal: PropTypes.func.isRequired
  }

  closeModal = () => {
    this.props.toggleModal(false);
    this.props.setResourceId(null);
  }

  render() {
    const { content, news, modalOpen } = this.props;
    const {
      'home-title': homeTitle,
      'home-subtitle': homeSubtitle,
      'society-title': societyTitle,
      'society-summary': societySummary,
      'index-title': indexTitle,
      'index-text': indexText,
      'index-sidenote': indexSidenote,
      'roadmap-title': roadmapTitle,
      'roadmap-text': roadmapText
    } = content;

    const existsRoadMapContent = !isEmpty(roadmapTitle) || !isEmpty(roadmapText);

    return (
      <div className="c-foundation-homepage">
        <style jsx>{styles}</style>
        <div className="page-intro">
          <div className="l-layout">
            <div className="row">
              <div className="col-xs-12">
                <h2 className="title">{homeTitle}</h2>
                <h3 className="subtitle">{homeSubtitle}</h3>
              </div>
            </div>
          </div>
        </div>

        <section className="section -mining-society -gray">
          <div className="l-layout">
            <div className="row center-xs">
              <div className="col-md-10">
                <h4 className="title">{societyTitle}</h4>
                <p className="subtitle">{societySummary}</p>
                <div className="button-box">
                  <Button
                    className="-big -round -gray"
                  >
                    <Link
                      route="mining-society"
                    >
                      <a>Show more</a>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="page-content">
          <section className="section -index">
            <div className="l-layout">
              <div className="row center-xs -no-text-align">
                <div className="col-md-10">
                  <div className="row">
                    <div className="col-xs-12">
                      <h4 className="title">{indexTitle}</h4>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="highlight">
                        <CustomContent>
                          <div className="content" dangerouslySetInnerHTML={{ __html: indexText }} />
                        </CustomContent>
                      </div>
                    </div>
                    <div className="col-md-5 col-md-offset-1">
                      <div className="sidenote">
                        <div className="sidenote-content" dangerouslySetInnerHTML={{ __html: indexSidenote }} />
                        <div className="button-box">
                          <Button
                            className="-round -red"
                          >
                            <Link
                              route="index"
                            >
                              <a>Go to Index 2018</a>
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {existsRoadMapContent &&
            <section className="section">
              <div className="l-layout">
                <div className="row center-xs -no-text-align">
                  <div className="col-md-10">
                    {!isEmpty(roadmapTitle) &&
                      <h4 className="title">{roadmapTitle}</h4>}
                    {!isEmpty(roadmapText) &&
                      <CustomContent>
                        <div className="content" dangerouslySetInnerHTML={{ __html: roadmapText }} />
                      </CustomContent>}
                  </div>
                </div>
              </div>
            </section>}

          {!!news.length &&
            <section className="section">
              <div className="l-layout">
                <NewsSlider />
              </div>
            </section>}
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

export default FoundationHomepagePage;
