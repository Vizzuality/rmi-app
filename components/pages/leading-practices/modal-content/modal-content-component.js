import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'routes';

// styles
import styles from './modal-content-styles.scss';

class ModalContent extends PureComponent {
  static propTypes = {
    leadingPractice: PropTypes.object,
    toggleModal: PropTypes.func.isRequired,
    setSelectedLeadingPractice: PropTypes.func.isRequired
  }

  static defaultProps = { leadingPractice: {} }

  closeModal = () => {
    this.props.toggleModal(false);
    this.props.setSelectedLeadingPractice(null);
  }

  render() {
    const { name, companies, description } = this.props.leadingPractice;

    return (
      <div className="c-modal-content">
        <style jsx>{styles}</style>
        <h3 className="title">{name}</h3>

        {companies.map(company => (
          <h4
            key={company.id}
            onClick={this.closeModal}
            className="company"
          >
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