
import { createSelector } from 'reselect';

const mediaReleases = state => state.staticContent.content['media-releases'];
const mediaReleaseId = state => state.staticContent.resourceId;

export const getMediaRelease = createSelector(
  [mediaReleases, mediaReleaseId],
  (_mediaReleases = [], _mediaReleaseId) =>
    _mediaReleases.find(mediaRelease => mediaRelease.id === _mediaReleaseId)
);

export default { getMediaRelease };
