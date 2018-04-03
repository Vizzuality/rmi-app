import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// components
import Spinner from 'components/common/spinner';
import LeadingPracticeCard from './leading-practices-card-component';

class LeadingPracticesCardList extends PureComponent {
  static propTypes = {
    leadingPractices: PropTypes.array,
    loading: PropTypes.bool,
    toggleModal: PropTypes.func.isRequired
  };

  openModal({ id }) {
    this.props.setSelectedLeadingPractice(id)
    this.props.toggleModal(true)
  };

  render() {
    const { leadingPractices, loading, setModalContent } = this.props;

    return (
      <div className="leading-practices-card-list">
        <div className="row -equal-height">
          {leadingPractices.map(leadingPractice => (
            <div className="col-md-4" key={leadingPractice.id}>
              <LeadingPracticeCard
                leadingPractice={leadingPractice}
                onClick={(leadingPractice) => this.openModal(leadingPractice)}
              />
            </div>
          ))}
        </div>
        {loading && <Spinner />}
      </div>
    );
  }
}

export default LeadingPracticesCardList;
