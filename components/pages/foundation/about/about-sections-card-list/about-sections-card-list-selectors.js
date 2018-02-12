
import { createSelector } from 'reselect';

const aboutSections = state => state.staticContent.content['about-sections'] || [];

export const parseAboutSections = createSelector(
  aboutSections,
  _aboutSections => _aboutSections.map(aboutSection => ({
    id: aboutSection.id,
    title: aboutSection.title,
    slug: aboutSection.slug,
    summary: aboutSection.summary
  }))
);

export default {
  parseAboutSections
};
