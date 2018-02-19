import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// components
import AboutSectionsCardList from './about-sections-card-list';

class About extends PureComponent {
  static propTypes = { content: PropTypes.object.isRequired }

  render() {
    const { content } = this.props;
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
              <div className="row">
                <div className="col-xs-12">
                  <AboutSectionsCardList />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default About;
