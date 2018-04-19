import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// components
import Spinner from 'components/common/spinner';
import TopCompany from './top-companies-item';

// styles
import styles from './top-companies-styles.scss';

class TopCompanies extends PureComponent {
  static propTypes = {
    data: PropTypes.array.isRequired,
    currentLanguage: PropTypes.string.isRequired
  }

  render() {
    const { data, currentLanguage } = this.props;

    return (
      <div className="c-top-companies">
        <style jsx>{styles}</style>
        {!data.length && <Spinner />}
        {!!data.length &&
          <div className="companies-container">
            <h2 className="title">Companies achieving the ten best scores for each thematic area</h2>
            <div className="row">
              {data.map(top => (
                <div
                  key={top.id}
                  className="col-xs-12 col-sm-6 col-md-4"
                >
                  <TopCompany
                    currentLanguage={currentLanguage}
                    data={top}
                  />
                </div>
              ))}
            </div>
          </div>}
      </div>
    );
  }
}

export default TopCompanies;
