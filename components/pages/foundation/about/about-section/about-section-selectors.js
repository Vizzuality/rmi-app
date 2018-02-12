
import { createSelector } from 'reselect';

const aboutSections = state => state.staticContent.content['about-sections'];
const sectionRoute = state => state.routes.query.section;

export const getCurrentAboutSection = createSelector(
  [aboutSections, sectionRoute],
  (_aboutSections = [], _sectionRoute) => _aboutSections.find(aboutSection =>
    aboutSection.slug === _sectionRoute)
);

export default {
  getCurrentAboutSection
};
