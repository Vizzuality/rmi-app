import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// styles
import styles from './mining-society-styles.scss';

class MiningSocietyPage extends PureComponent {
  static propTypes = {
    content: PropTypes.object.isRequired
  }

  render() {
    const { content } = this.props;
    const { title, subtitle, summary, text, sidenote } = content;

    return (
      <div className="c-mining-society-page">
        <style jsx>{styles}</style>
        <div className="page-intro">
          <div className="l-layout">
            <div className="row">
              <div className="col-md-6">
                <h2 className="title">{title}</h2>
                <h3 className="subtitle">{subtitle}</h3>
              </div>
              <div className="col-md-6">
                {/* image goes here */}
              </div>
            </div>
            <div className="row center-xs">
              <div className="col-md-10">
                <p className="summary">{summary}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="page-content">
          <div className="section -gray">
            <div className="l-layout">
              <div className="row center-xs -no-text-align">
                <div className="col-md-6">
                  <p>{text}</p>
                </div>
                <div className="col-md-5 col-md-offset-1 ">
                  <div className="sidenote">
                    <p className="sidenote-content">{sidenote}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MiningSocietyPage;
