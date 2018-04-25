import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// components
import Spinner from 'components/common/spinner';
import LeadingPracticeCard from './leading-practices-card-component';

class LeadingPracticesCardList extends PureComponent {
  static propTypes = {
    leadingPractices: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    currentLanguage: PropTypes.string.isRequired,
    toggleModal: PropTypes.func.isRequired,
    setSelectedLeadingPractice: PropTypes.func.isRequired
  };

  openModal({ id }) {
    this.props.setSelectedLeadingPractice(id);
    this.props.toggleModal(true);
  }

  handleClick = leadingPractice => this.openModal(leadingPractice)

  render() {
    const { leadingPractices, loading, currentLanguage } = this.props;

    return (
      <div className="leading-practices-card-list">
        <div className="row -equal-height">
          {leadingPractices.map(leadingPractice => (
            <div className="col-md-4" key={leadingPractice.id}>
              <LeadingPracticeCard
                currentLanguage={currentLanguage}
                leadingPractice={leadingPractice}
                onClick={this.handleClick}
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
