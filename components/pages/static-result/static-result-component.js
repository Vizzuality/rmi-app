import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// components
import CustomContent from 'components/common/custom-content';

class StaticResult extends PureComponent {
  static propTypes = { data: PropTypes.object.isRequired }

  render() {
    const { data } = this.props;
    const { title, text } = data;

    return (
      <div className="c-static-result-page">
        <section className="section -gray">
          <div className="l-layout">
            <div className="row">
              <div className="col-xs-12">
                <CustomContent>
                  <h2 className="section-title">{title}</h2>
                  <div className="content" dangerouslySetInnerHTML={{ __html: text }} />
                </CustomContent>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default StaticResult;
