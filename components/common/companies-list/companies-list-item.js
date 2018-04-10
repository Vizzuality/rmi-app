import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Router } from 'routes';
import Tether from 'react-tether';

// helpers
import { trackEvent, trackLink } from 'helpers/analytics';

// components
import CompaniesListTooltip from './companies-list-tooltip';

// styles
import styles from './companies-list-styles.scss';

class CompaniesListItem extends PureComponent {
  static propTypes = {
    company: PropTypes.object.isRequired,
    isCompanyPage: PropTypes.bool.isRequired
  }

  constructor(props) {
    super(props);

    this.state = { visibility: false };
  }

  handleToggle = () => {
    const { company } = this.props;
    const { visibility } = this.state;
    this.setState({ visibility: !visibility });
    trackEvent('click', `Clicks on mine sites of company: ${company.name}`, company);
  }

  handleClick = (company) => {
    const { id } = company;

    trackLink(`/companies/${id}`, 'Clicks on company detail ', () => {
      Router.pushRoute('companies', { company: id });
    });
  }

  handleClose = () => this.setState({ visibility: false });

  render() {
    const { isCompanyPage, company } = this.props;
    const { name, id, 'selected-mine-sites': mineSites } = company;
    const { visibility } = this.state;

    if (isCompanyPage) {
      return (
        <Fragment>
          <style jsx>{styles}</style>
          <div className="companies-list-item">
            <a
              className="company-name"
              onClick={() => this.handleClick(company)}
            >
              {name}
            </a>
          </div>
        </Fragment>
      );
    }

    return (
      <Fragment>
        <style jsx>{styles}</style>
        <Tether
          attachment="top center"
          targetAttachment="bottom center"
          className="companies-list-tooltip-tether"
          key={id}
          constraints={[{
            to: 'target',
            attachment: 'together'
          }]}
        >
          <div
            className="companies-list-item"
            onClick={this.handleToggle}
          >
            <span className="company-name">{name}</span>
          </div>
          {visibility &&
            <CompaniesListTooltip
              mineSites={mineSites}
              company={this.props.company}
            />}
        </Tether>
        {visibility &&
          <div
            className="veil"
            onClick={this.handleClose}
          />}
      </Fragment>
    );
  }
}

export default CompaniesListItem;
