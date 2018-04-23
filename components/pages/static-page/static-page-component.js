import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// components
import Spinner from 'components/common/spinner';
import CustomContent from 'components/common/custom-content';

class DownloadsPage extends PureComponent {
  static propTypes = {
    content: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired
  }

  render() {
    const { content, loading } = this.props;
    const { title, text } = content;

    return (
      <div className="c-static-page">
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

export default DownloadsPage;
