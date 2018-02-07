
export const INDEX_NAVIGATION = [{
  id: 1,
  label: 'Results',
  query: {
    route: 'results',
    params: {}
  },
  children: [{
    id: '1-1',
    label: 'Overall',
    query: {
      route: 'results',
      params: { issue: 'overall' }
    }
  }, {
    id: '1-2',
    label: 'Economic Development',
    query: {
      route: 'results',
      params: { issue: 'economic-development' }
    }
  }, {
    id: '1-3',
    label: 'Business Conduct',
    query: {
      route: 'results',
      params: { issue: 'business-conduct' }
    }
  }, {
    id: '1-4',
    label: 'Lifecycle Management',
    query: {
      route: 'results',
      params: { issue: 'lifecycle-management' }
    }
  }, {
    id: '1-5',
    label: 'Community Wellbeing',
    query: {
      route: 'results',
      params: { issue: 'community-wellbeing' }
    }
  }, {
    id: '1-6',
    label: 'Environmental Responsability',
    query: {
      route: 'results',
      params: { issue: 'environmental-responsability' }
    }
  }]
}, {
  id: 2,
  label: 'Leading Practices',
  query: {
    route: 'leading-practices',
    params: {}
  }
}, {
  id: 3,
  label: 'Companies',
  query: {
    route: 'companies',
    params: {}
  }
}, {
  id: 4,
  label: 'Mine Sites',
  query: {
    route: 'mine-sites',
    params: {}
  }
}];

export const FOUNDATION_NAVIGATION = [{
  id: 5,
  label: 'Mining and Society',
  query: {
    route: 'mining-society',
    params: {}
  }
}, {
  id: 6,
  label: 'About',
  query: {
    route: 'about',
    params: {}
  }
}, {
  id: 7,
  label: 'Media',
  query: {
    route: 'media',
    params: {}
  }
}, {
  id: 8,
  label: 'Contact',
  query: {
    route: 'contact',
    params: {}
  }
}, {
  id: 9,
  label: 'Index',
  query: {
    route: 'contact',
    params: {}
  }
}];

export default {
  INDEX_NAVIGATION,
  FOUNDATION_NAVIGATION
};
