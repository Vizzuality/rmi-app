
const { analytics } = typeof window !== 'undefined' ? window : {};

export const trackPage = () => {
  analytics.page();
};

export const trackEvent = (eventName, properties = {}, options = {}, callback) => {
  analytics.track(eventName, properties, options, callback);
};

export default {
  trackPage,
  trackEvent
};
