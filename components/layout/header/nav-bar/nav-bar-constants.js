
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
    slug: 'results-overall',
    query: {
      route: 'results',
      params: { section: 'overall' }
    }
  }, {
    id: '1-2',
    label: 'Thematic Areas',
    slug: 'thematic-areas',
    query: {
      route: 'results',
      params: { route: 'results' }
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
}, {
  id: 5,
  label: 'Index',
  query: {
    route: 'index',
    params: {}
  },
  noLink: true,
  children: [{
    id: '5-1',
    label: 'Index 2018',
    slug: 'index-2018',
    query: {
      route: 'index',
      params: {}
    }
  }, {
    id: '5-2',
    label: 'Methodology 2017',
    slug: 'methodology-2017',
    query: {
      route: 'results',
      params: { id: 'methodology-2017' }
    }
  }]
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
