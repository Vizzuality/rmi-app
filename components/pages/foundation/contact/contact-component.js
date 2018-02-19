import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// styles
import styles from './contact-styles.scss';

class ContactPage extends PureComponent {
  static propTypes = { content: PropTypes.object.isRequired }

  render() {
    const { content } = this.props;
    const {
      title,
      'address-line-1': addressFirstLine,
      'address-line-2': addressSecondLine,
      'address-line-3': addressThirdLine,
      email,
      telephone
    } = content;

    return (
      <div className="c-contact">
        <style jsx>{styles}</style>
        <div className="page-intro">
          <div className="l-layout">
            <div className="row">
              <div className="col-xs-12">
                <h2 className="title">Contact</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="page-content">
          <section className="section">
            <div className="l-layout">
              <div className="row">
                <div className="col-xs-12">
                  <address>
                    <h3 className="title">{title}</h3>
                    <div className="location">
                      <span className="address-line">{addressFirstLine}</span>
                      {addressSecondLine &&
                        <span className="address-line">{addressSecondLine}</span>}
                      {addressThirdLine &&
                        <span className="address-line">{addressThirdLine}</span>}
                    </div>

                    <div className="contact-links">
                      <a className="address-line" href={`mailto:${email}`}>{email}</a>
                      <a className="address-line" href={`tel:${telephone}`}>{telephone}</a>
                    </div>
                  </address>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default ContactPage;
