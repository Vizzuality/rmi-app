import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// components
import StaticPageComponent from 'components/pages/static-page';

class IndexesPage extends PureComponent {
  static propTypes = { content: PropTypes.object.isRequired }

  render() {
    const { content } = this.props;

    return (
      <StaticPageComponent content={content} />
    );
  }
}

export default IndexesPage;
