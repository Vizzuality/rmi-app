import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// components
import Spinner from 'components/common/spinner';
import CustomContent from 'components/common/custom-content';

class MineSite extends PureComponent {
  static propTypes = {
    data: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired
  }

  render() {
    const { data, loading } = this.props;
    const { title, text } = data;

    return (
      <div className="c-methodology-page">
        {loading ? <Spinner /> :
        <section className="section -gray">
          <div className="l-layout">
            <div className="row">
              <div className="col-xs-12">
                <CustomContent>
                  <h2 className="section-title">{title}</h2>
                  <div className="content" dangerouslySetInnerHTML={{ __html: text }} />
                </CustomContent>
              </div>
            </div>
          </div>
        </section>}
      </div>
    );
  }
}

export default MineSite;
