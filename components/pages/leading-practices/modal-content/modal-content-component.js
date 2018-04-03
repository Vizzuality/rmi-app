import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'routes';

// styles
import styles from './modal-content-styles.scss';

class ModalContent extends PureComponent {
  closeModal() {
    this.props.toggleModal(false);
    this.props.setSelectedLeadingPractice(null);
  };

  render() {
    const { name, companies, description } = this.props.leadingPractice;

    return (
      <div className="c-modal-content">
        <style jsx>{styles}</style>
        <h3 className="title">{name}</h3>

        {companies.map(company => (
          <h4 onClick={() => this.closeModal()} key={company.id} className="company">
            <Link
              route="companies"
              params={{ company: company.id }}
            >
              <a>{company.name}</a>
            </Link>
          </h4>
        ))}

        {description && <p>{description}</p>}
      </div>
    );
  }
}

export default ModalContent;
