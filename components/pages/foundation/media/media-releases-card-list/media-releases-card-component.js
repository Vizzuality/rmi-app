import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// styles
import styles from './media-releases-card-styles.scss';

class MediaReleaseCard extends PureComponent {
  static propTypes = {
    mediaRelease: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      summary: PropTypes.string.isRequired
    }),
    onClick: PropTypes.func.isRequired
  }

  static defaultProps = { mediaRelease: {} }

  handleClick = () => {
    const { onClick, mediaRelease } = this.props;
    onClick(mediaRelease);
  }

  render() {
    const { title, subtitle, summary } = this.props.mediaRelease;

    return (
      <div
        className="c-media-releases-card"
        onClick={this.handleClick}
      >
        <style jsx>{styles}</style>
        <h3 className="title">{title}</h3>
        <h3 className="subtitle">{subtitle}</h3>
        <p className="summary">{summary}</p>
      </div>
    );
  }
}

export default MediaReleaseCard;
