import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import Tether from 'react-tether';

// components
import CompaniesListTooltip from './companies-list-tooltip';

// styles
import styles from './companies-list-styles.scss';

class CompaniesListItem extends PureComponent {
  static propTypes = { company: PropTypes.object.isRequired }

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
    const { name, id, 'mine-sites': mineSites } = this.props.company;
    const { visibility } = this.state;

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
            {/* <style jsx>{styles}</style> */}
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
