import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// components
import CustomContent from 'components/common/custom-content';

class MiningSocietyPage extends PureComponent {
  static propTypes = { content: PropTypes.object.isRequired }

  render() {
    const { content } = this.props;
    const { title, subtitle, summary, text } = content;

    return (
      <div className="c-mining-society-page">
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
                <div className="col-xs-10">
                  <CustomContent>
                    <div className="content" dangerouslySetInnerHTML={{ __html: text }} />
                  </CustomContent>
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
