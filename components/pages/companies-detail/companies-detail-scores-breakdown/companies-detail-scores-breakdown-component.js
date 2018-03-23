import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// global constants
import { overallColors, measurementColors } from 'constants/graph-colors';

// components
import SpiderChart from 'components/charts/spiderchart';
import StackedBars from 'components/charts/stacked-bars';
import Table from 'components/common/table';
import Disclaimer from 'components/common/disclaimer';
import CompaniesDetailMineSitesList from './companies-detail-mine-sites-list';
import CompaniesDetailAccordion from './companies-detail-accordion';
import CompaniesDetailOverallMeasurements from './companies-detail-overall-measurements';
import SubsidiariesTable from './subsidiaries-table';
import Unknowndata from './unknown-data';

// constants
import {
  MINE_SITE_TABLE_COLUMNS,
  INVESTMENT_DISPUTES_COLUMNS,
  TAX_JURISDICTIONS_COLUMNS
} from './companies-detail-scores-breakdown-constants';

// styles
import styles from './companies-detail-scores-breakdown-styles.scss';

class CompaniesDetailScoresBreakDown extends PureComponent {
  static propTypes = {
    overallScores: PropTypes.array.isRequired,
    mineSites: PropTypes.array.isRequired,
    breakdownScores: PropTypes.array.isRequired,
    shareholders: PropTypes.array.isRequired,
    beneficialOwners: PropTypes.array.isRequired,
    investmentDisputes: PropTypes.array.isRequired,
    knownTaxJurisdictions: PropTypes.array.isRequired,
    company: PropTypes.array.isRequired
  }

  render() {
    const {
      company, overallScores, breakdownScores, mineSites,
      shareholders, beneficialOwners,
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
        </div>

        <section className="section overall-measurement-container">
          <div className="l-layout">
            <div className="row">
              <div className="col-xs-12">
                <CompaniesDetailOverallMeasurements />
              </div>
            </div>
          </div>
        </section>

        <div className="accordion-header">
          <div className="l-layout">
            <div className="row">
              <div className="col-md-12">
                <h2>
                  Indicator-by-indicator results
                </h2>
              </div>
            </div>
          </div>
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
              <div className="col-xs-12 col-md-5">
                <h3 className="title">Main Shareholders</h3>
                {shareholders.length ? <Table
                  columns={[
                    {
                      property: 'name',
                      header: { label: `As of: ${shareholdersDate || 'unknown'}` }
                    },
                    {
                      property: 'percent-shares',
                      header: { label: 'Shares (%)' },
                      props: { style: {
                          textAlign: 'right',
                          minWidth: 90
                      } }
                    }
                  ]}
                  rows={shareholders}
                /> : <Unknowndata />}
              </div>
              <div className="col-xs-12 col-md-5">
                <SubsidiariesTable />
              </div>
            </div>
            <div className="row between-md">
              <div className="col-xs-12 col-md-5">
                <h3 className="title">Beneficial Owners</h3>
                {beneficialOwners.length ? <Table
                  columns={[
                    {
                      property: 'name',
                      header: { label: `As of: ${beneficialOwnersDate || 'unknown'}` }
                    },
                    {
                      property: 'percent-ownership',
                      header: { label: 'Shares (%)' },
                      props: { style: { textAlign: 'right' } }
                    }
                  ]}
                  rows={beneficialOwners}
                /> : <Unknowndata />}
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12">
                <h3 className="title">Known Tax Jurisdictions</h3>
                {knownTaxJurisdictions.length ? <Table
                  columns={TAX_JURISDICTIONS_COLUMNS}
                  rows={knownTaxJurisdictions}
                /> : <Unknowndata asOf={false} />}
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <h3 className="title">Recent involvements in Investor/State investment disputes (since 2014)</h3>
                {investmentDisputes.length ? <Table
                  columns={INVESTMENT_DISPUTES_COLUMNS}
                  rows={investmentDisputes}
                /> : <Unknowndata asOf={false} />}
              </div>
            </div>
            <Disclaimer />
          </div>
        </section>
      </div>
    );
  }
}

export default CompaniesDetailScoresBreakDown;
