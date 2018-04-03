import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'routes';

// styles
import styles from './leading-practices-card-styles.scss';

class LeadingPracticesCard extends PureComponent {
  static propTypes = {
    leadingPractice: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      companies: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        slug: PropTypes.string
      })),
      description: PropTypes.string
    }),
    onClick: PropTypes.func.isRequired
  }

  shortDescription(description) {
    return `${description.replace(/^(.{120}[^\s]*).*/, "$1")}...`
  };

  render() {
    const { onClick, leadingPractice } = this.props;
    const { title, companies, description } = leadingPractice;

    return (
      <div className="c-leading-practices-card" onClick={() => onClick(leadingPractice)}>
        <style jsx>{styles}</style>
        <h3 className="title">{title}</h3>
        {companies.map(company => (
          <h4 key={company.id} className="company">
            <Link
              route="companies"
              params={{ company: company.id }}
            >
              <a>{company.name}</a>
            </Link>
          </h4>
        ))}

        {description &&
          <p>{this.shortDescription(description)}</p>}
      </div>
    );
  }
}

export default LeadingPracticesCard;
