import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'routes';
import Tether from 'react-tether';

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
    const { visibility } = this.state;
    this.setState({ visibility: !visibility });
  }

  handleClose = () => this.setState({ visibility: false });

  render() {
    const { isCompanyPage, company } = this.props;
    const { name, id, 'mine-sites': mineSites } = company;
    const { visibility } = this.state;

    if (isCompanyPage) {
      return (
        <Fragment>
          <style jsx>{styles}</style>
          <div
            className="companies-list-item"
            onClick={this.handleToggle}
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
