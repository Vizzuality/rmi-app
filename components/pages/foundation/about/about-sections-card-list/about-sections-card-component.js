import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'routes';

// styles
import styles from './about-sections-card-styles.scss';

class AboutSectionCard extends PureComponent {
  static propTypes = {
    aboutSection: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      summary: PropTypes.string
    })
  }

  render() {
    const { title, slug, summary } = this.props.aboutSection;

    return (
      <div className="c-about-section-card">
        <style jsx>{styles}</style>
        <Link
          route="about"
          params={{ section: slug }}
        >
          <a href="" className="link-container" />
        </Link>

        <h3 className="title">{title}</h3>
        <p className="summary">{summary}</p>
      </div>
    );
  }
}

export default AboutSectionCard;
