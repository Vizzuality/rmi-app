import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// components
import AboutSectionsCard from './about-sections-card-component';

class AboutSectionsCardList extends PureComponent {
  static propTypes = {
    aboutSections: PropTypes.array
  };

  render() {
    const { aboutSections } = this.props;

    return (
      <div className="leading-practices-card-list">
        <div className="row -equal-height">
          {aboutSections.map(aboutSection => (
            <div className="col-md-4" key={aboutSection.id}>
              <AboutSectionsCard aboutSection={aboutSection} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default AboutSectionsCardList;
