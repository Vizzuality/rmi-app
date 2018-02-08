import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'routes';

// components
import Card from 'components/common/card';

// styles
import styles from './leading-practices-card-styles.scss';

class LeadingPracticesCard extends PureComponent {
  static propTypes = {
    leadingPractice: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      company: PropTypes.shape({
        name: PropTypes.string,
        slug: PropTypes.string
      }),
      description: PropTypes.string
    })
  }

  render() {
    const { title, company, description } = this.props.leadingPractice;

    return (
      <Card>
        <div className="c-leading-practices-card">
          <style jsx>{styles}</style>
          <h3 className="title">{title}</h3>
          <h4 className="company">
            <Link
              route="companies"
              params={{
                company: company.slug
              }}
            >
              <a>{company.name}</a>
            </Link>
          </h4>
          {description &&
            <p>{description}</p>}
        </div>
      </Card>
    );
  }
}

export default LeadingPracticesCard;
