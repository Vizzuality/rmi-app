
export const INDEX_NAVIGATION = [{
  id: 1,
  label: 'Results',
  query: {
    route: 'results',
    params: {}
  },
  noLink: true,
  children: [{
    id: '1-1',
    label: 'Overall results',
    slug: 'overall-results',
    query: { route: 'results-overall' }
  }, {
    id: '1-2',
    label: 'Thematic Areas',
    slug: 'thematic-areas',
    query: {
      route: 'results',
      params: {}
    },
    children: [],
    noLink: true
  }]
}, {
  id: 2,
  label: 'Leading Practices',
  slug: 'leading-practices',
  query: {
    route: 'leading-practices',
    params: {}
  }
}, {
  id: 3,
  label: 'Companies',
  slug: 'companies',
  query: {
    route: 'companies',
    params: {}
  }
}, {
  id: 4,
  label: 'Mine Sites',
  slug: 'mine-sites',
  query: {
    route: 'mine-sites',
    params: {}
  }
}];

export const FOUNDATION_NAVIGATION = [{
  id: 5,
  label: 'Mining and Society',
  slug: 'mining-society',
  query: {
    route: 'mining-society',
    params: {}
  }
}, {
  id: 6,
  label: 'About',
  slug: 'about',
  query: {
    route: 'about',
    params: {}
  }
}, {
  id: 7,
  label: 'Media',
  slug: 'media',
  query: {
    route: 'media',
    params: {}
  }
}, {
  id: 8,
  label: 'Contact',
  slug: 'contact',
  query: {
    route: 'contact',
    params: {}
  }
}, {
  id: 9,
  label: 'Index',
  slug: 'index',
  query: {
    route: 'contact',
    params: {}
  }
}];

export default {
  INDEX_NAVIGATION,
  FOUNDATION_NAVIGATION
};
