import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Router, Link } from 'routes';
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
    isCompanyPage: PropTypes.bool.isRequired,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onOpenTooltip: PropTypes.func,
    onCloseTooltip: PropTypes.func
  }

  static defaultProps = {
    onMouseEnter: () => {},
    onMouseLeave: () => {},
    onOpenTooltip: null,
    onCloseTooltip: null
  }

  constructor(props) {
    super(props);

    this.state = { visibility: false };
  }

  handleToggle = () => {
    const { company, onOpenTooltip } = this.props;
    const { visibility } = this.state;
    this.setState({ visibility: !visibility });

    if (onOpenTooltip) onOpenTooltip(company);

    trackEvent('click', `Clicks on mine sites of company: ${company.name}`, company);
  }

  handleClick = (company) => {
    const { id } = company;

    trackLink(`/companies/${id}`, 'Clicks on company detail ', () => {
      Router.pushRoute('companies', { company: id });
    });
  }

  handleClose = () => {
    const { onCloseTooltip, company } = this.props;
    this.setState({ visibility: false });

    if (onCloseTooltip) onCloseTooltip(company);
  }

  render() {
    const { isCompanyPage, company, onMouseEnter, onMouseLeave } = this.props;
    const { name, id, 'selected-mine-sites': mineSites } = company;
    const { visibility } = this.state;

    if (isCompanyPage) {
      return (
        <Fragment>
          <style jsx>{styles}</style>
          <div
            className="companies-list-item"
            onClick={this.handleToggle}
            onMouseEnter={() => onMouseEnter(company)}
            onMouseLeave={onMouseLeave}
          >
            <Link
              route="companies"
              params={{ company: id }}
            >
              <a className="company-name">{name}</a>
            </Link>
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
