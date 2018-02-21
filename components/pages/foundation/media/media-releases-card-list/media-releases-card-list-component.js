import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// components
import Spinner from 'components/common/spinner';
import MediaReleaseCard from './media-releases-card-component';

class MediaReleasesCardList extends PureComponent {
  static propTypes = {
    mediaReleases: PropTypes.array,
    loading: PropTypes.bool
  };

  render() {
    const { mediaReleases, loading } = this.props;

    return (
      <div className="media-releases-card-list">
        <div className="row -equal-height">
          {mediaReleases.map(mediaRelease => (
            <div className="col-md-4" key={mediaRelease.id}>
              <MediaReleaseCard mediaRelease={mediaRelease} />
            </div>
          ))}
        </div>
        {loading && <Spinner />}
      </div>
    );
  }
}

export default MediaReleasesCardList;
