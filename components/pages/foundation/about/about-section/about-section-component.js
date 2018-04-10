import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// components
import Breadcrumbs from 'components/common/breadcrumbs';

class AboutSection extends PureComponent {
  static propTypes = { content: PropTypes.object }

  static defaultProps = { content: {} }

  render() {
    const { content } = this.props;
    const { title, summary, text, sidenote } = content;

    return (
      <div className="c-contact">
        <div className="page-intro">
          <div className="l-layout">
            <div className="row">
              <div className="col-md-6">
                <Breadcrumbs />
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
              <div className="row center-xs -no-text-align">
                <div className="col-xs-12">
                  <div dangerouslySetInnerHTML={{ __html: text }} />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default AboutSection;
