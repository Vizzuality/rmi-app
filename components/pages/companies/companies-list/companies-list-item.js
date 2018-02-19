import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'routes';
import Tether from 'react-tether';

// components
import CompaniesListTooltip from './companies-list-tooltip';

// styles
import styles from './companies-list-styles.scss';

class CompaniesListItem extends PureComponent {
  static propTypes = {
    company: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);

    this.state = {
      visibility: false
    };
  }

  handleToggle = () => {
    const { visibility } = this.state;
    this.setState({ visibility: !visibility });
  }

  render() {
    const { name, id, mineSites } = this.props.company;
    const { visibility } = this.state;

    return (
      <li className="companies-list-item">
        <style jsx>{styles}</style>
        <Link
          route="companies"
          params={{
            company: id
          }}
        >
          <a className="company-name">{name}</a>
        </Link>

        <Tether
          attachment="top center"
          targetAttachment="bottom center"
          key={id}
          classPrefix=""
          constraints={[{
            to: 'target',
            attachment: 'together'
          }]}
        >
          <span
            className="toggle"
            onClick={this.handleToggle}
          >
            {visibility ? '-' : '+'}
          </span>
          {visibility &&
            <CompaniesListTooltip
              mineSites={mineSites}
            />}
        </Tether>
      </li>
    );
  }
}

export default CompaniesListItem;
