
import { createSelector } from 'reselect';

const mediaReleases = state => state.staticContent.content['media-releases'];

export const parseMediaReleases = createSelector(
  mediaReleases,
  (_mediaReleasess = []) => _mediaReleasess.map(mediaRelease => ({
    id: mediaRelease.id,
    title: mediaRelease.title,
    subtitle: mediaRelease.subtitle,
    summary: mediaRelease.summary,
    text: mediaRelease.text
  }))
);

export default { parseMediaReleases };
