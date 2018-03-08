import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// global constants
import { overallColors, measurementColors } from 'constants/graph-colors';

// components
import SpiderChart from 'components/charts/spiderchart';
import StackedBars from 'components/charts/stacked-bars';
import Table from 'components/common/table';
import CompaniesDetailMineSitesList from './companies-detail-mine-sites-list';
import ScoresList from './scores-list';
import CompaniesDetailAccordion from './companies-detail-accordion';
import CompaniesDetailOverallMeasurements from './companies-detail-overall-measurements';

// constants
import {
  MINE_SITE_TABLE_COLUMNS
} from './companies-detail-scores-breakdown-constants';

// styles
import styles from './companies-detail-scores-breakdown-styles.scss';

class CompaniesDetailScoresBreakDown extends PureComponent {
  static propTypes = {
    overallScores: PropTypes.array.isRequired,
    mineSites: PropTypes.array.isRequired,
    breakdownScores: PropTypes.array.isRequired,
    shareholders: PropTypes.array.isRequired,
    subsidiaries: PropTypes.array.isRequired,
    beneficialOwners: PropTypes.array.isRequired,
    investmentDisputes: PropTypes.array.isRequired,
    knownTaxJurisdictions: PropTypes.array.isRequired,
    company: PropTypes.array.isRequired
  }

  render() {
    const {
      company, overallScores, breakdownScores, mineSites,
      shareholders, subsidiaries, beneficialOwners,
      investmentDisputes, knownTaxJurisdictions
    } = this.props;
    const {
      'shareholders-date': shareholdersDate,
      'subsidiaries-date': subsidiariesDate,
      'beneficial-owners-dates': beneficialOwnersDate,
      summary
    } = company[0] || {};

    return (
      <div className="c-companies-detail-scores-breakdown">
        <style jsx>{styles}</style>
        <div className="l-layout">
          {summary &&
            <div className="summary-results">
              <div className="row center-md -no-text-align">
                <div className="col-xs-12">
                  <div className="summary">
                    <h3 className="title">Summary of results</h3>
                    <p>{summary}</p>
                  </div>
                </div>
              </div>
            </div>}
          <div className="section overall-scores-container">
            <div className="row center-md">
              <div className="col-md-10">
                <SpiderChart
                  colors={overallColors}
                  data={overallScores}
                />
              </div>
            </div>
          </div>
          <section className="section measurement-scores-container">
            <div className="row center-md -no-text-align">
              <div className="col-xs-12 col-md-10">
                <div className="stacked-bars-container">
                  {breakdownScores.map((breakdownScore, index) => (
                    <StackedBars
                      key={breakdownScore.id}
                      data={breakdownScore}
                      colors={measurementColors[index]}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>
          <section className="section overall-measurement-container">

            <div className="l-layout">
              <div className="row">
                <div className="col-xs-12">
                  <CompaniesDetailOverallMeasurements />
                </div>
              </div>
            </div>
          </section>
        </div>

        <section className="section -dark indicators-accordion">
          <div className="l-layout">
            <div className="row">
              <div className="col-xs-12">
                <CompaniesDetailAccordion />
              </div>
            </div>
          </div>
        </section>

        <section className="section -gray mine-sites-results">
          <div className="l-layout">
            <div className="row center-md">
              <div className="col-xs-12">
                <h2 className="title">Selected Mine sites results</h2>
                <h3 className="subtitle">Mine sites individually assessed but not included in the overall company score</h3>
                <Table
                  columns={MINE_SITE_TABLE_COLUMNS}
                  rows={mineSites}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="section -dark">
          <div className="l-layout">
            <div className="row">
              <div className="col-xs-12">
                <CompaniesDetailMineSitesList />
              </div>
            </div>
          </div>
        </section>
        <section className="section -gray miscellaneous-lists">
          <div className="l-layout">
            <div className="row between-md">
              <div className="col-md-5">
                <ScoresList
                  title="Main Shareholders"
                  startDate={shareholdersDate || 'unknown'}
                  data={shareholders}
                />
              </div>
              <div className="col-md-5">
                <ScoresList
                  title="Selection of Subisidaries"
                  startDate={subsidiariesDate || 'unknown'}
                  data={subsidiaries}
                />
              </div>
            </div>
            <div className="row between-md">
              <div className="col-md-5">
                <ScoresList
                  title="Beneficial Owners"
                  startDate={beneficialOwnersDate || 'unknown'}
                  data={beneficialOwners}
                />
              </div>
              <div className="col-md-12">
                <ScoresList
                  title="Recent involvements in Investor/State investment disputes"
                  data={investmentDisputes}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-5">
                <ScoresList
                  title="Known Tax Jurisdictions"
                  data={knownTaxJurisdictions}
                />
              </div>
            </div>
            <div className="disclaimer">
              <p className="disclaimer-text">Disclaimer. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default CompaniesDetailScoresBreakDown;
