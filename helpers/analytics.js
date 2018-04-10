
const { _paq } = typeof window !== 'undefined' ? window : {};

export const trackPage = () => {
  _paq.push(['setDocumentTitle', document.title]);
  _paq.push(['trackPageView']);
};

export const trackEvent = (action, name, value, callback) => {
  _paq.push(['trackEvent', action, name, value]);
  if (callback && typeof callback === 'function') callback();
};

export const trackLink = (url, linkType, callback) => {
  _paq.push(['trackLink', url, linkType]);
  if (callback && typeof callback === 'function') callback();
};

export default {
  trackPage,
  trackEvent,
  trackLink
};
