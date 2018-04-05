import React from 'react';
import PropTypes from 'prop-types';

// redux
import withRedux from 'next-redux-wrapper';
import { initStore } from 'store';

// actions
import { getScores } from 'modules/scores/scores-actions';
import { getIssueAreas } from 'components/pages/results-detail/results-detail-actions';
import { getResultSection } from 'modules/static-content/static-content-actions';

// components
import Page from 'components/page';
import Layout from 'components/layout';
import ResultsOverall from 'components/pages/results-overall';
import ResultsDetail from 'components/pages/results-detail';
import StaticResult from 'components/pages/static-result';


class ResultsPage extends Page {
  static propTypes = { section: PropTypes.string }

  static defaultProps = { section: '' }

  static async getInitialProps(context) {
    const props = await super.getInitialProps(context);

    const isOverallPage = context.query.section === 'overall';
    const isThematicPage = context.query.section === 'thematic';
    const isStaticPage = !isOverallPage && !isThematicPage;

    if (isOverallPage) {
      await context.store.dispatch(getScores({
        include: ['company'].join(','),
        'filter[kind]': 'absolute_breakdown',
        'page[size]': 1000
      }));
    }

    if (isThematicPage) {
      await context.store.dispatch(getIssueAreas({
        'filter[kind]': 'issue_areas',
        include: ['children', 'scores', 'scores.company', 'children.children', 'children.children.scores'].join(','),
        'page[size]': 1000
      }));
    }

    if (isStaticPage) {
      await context.store.dispatch(getResultSection({ 'filter[slug]': context.query.id }));
    }

    return { ...props };
  }

  render() {
    const { section } = this.props;

    const isOverallPage = section === 'overall';
    const isThematicPage = section === 'thematic';
    const isStaticPage = !isOverallPage && !isThematicPage;

    return (
      <Layout
        title="Results"
        description="Welcome to RMI | Results"
      >
        {isOverallPage && <ResultsOverall />}
        {isThematicPage && <ResultsDetail />}
        {isStaticPage && <StaticResult />}
      </Layout>
    );
  }
}

export default withRedux(
  initStore,
  state => ({ section: state.routes.query.section }),
  {}
)(ResultsPage);
