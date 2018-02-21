import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// components
import Select from 'components/common/select';
import Paginator from 'components/common/paginator';
import LeadingPracticesCardList from './leading-practices-card-list';

// actions
import { setPaginationPage, getLeadingPractices, setLeadingPracticesFilters } from './leading-practices-actions';


// styles
import styles from './leading-practices-styles.scss';

class LeadingPracticesPage extends PureComponent {
  static propTypes = {
    topics: PropTypes.array,
    leadingPracticesPagination: PropTypes.object.isRequired,
    setPaginationPage: PropTypes.func.isRequired,
    getLeadingPractices: PropTypes.func.isRequired,
    setLeadingPracticesFilters: PropTypes.func.isRequired
  }

  handlePagination = (nextPage) => {
    this.props.setPaginationPage(nextPage);
    this.props.getLeadingPractices({ include: ['companies'].join(',') });
  }

  handleTopic = (selectedTopic) => {
    this.props.setPaginationPage(1);
    this.props.setLeadingPracticesFilters({ topic: selectedTopic.value });
  }

  render() {
    const { topics, leadingPracticesPagination } = this.props;
    const { size, page, limit } = leadingPracticesPagination;

    return (
      <div className="c-leading-practices-page">
        <style jsx>{styles}</style>
        <div className="page-intro">
          <div className="l-layout">
            <div className="row">
              <div className="col-lg-5">
                <h2 className="title">Leading Practices</h2>
              </div>
              <div className="col-lg-7">
                <p>The Responsible Mining Index will assess company performance
                  against what society expects from mining companies on economic,
                  environmental, social and governance issues, based on a range of
                  internationally agreed practices and principles.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="section -dark">
          <div className="l-layout">
            <div className="leading-practices-container">
              <div className="filters-container">
                <Select
                  onChange={this.handleTopic}
                  options={topics}
                  placeholder="Select a topic"
                  theme="light"
                  className="-underline"
                />
              </div>
              <LeadingPracticesCardList />
              <div className="paginator-container">
                <Paginator
                  options={{
                    size,
                    page,
                    limit
                  }}
                  onChange={this.handlePagination}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({ leadingPracticesPagination: state.leadingPracticesPage.leadingPractices.pagination }),
  {
    setPaginationPage,
    getLeadingPractices,
    setLeadingPracticesFilters
  }
)(LeadingPracticesPage);
