import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class ModalContent extends PureComponent {
  render() {
    const { leadingPractice } = this.props;

    return (
      <p>
        {leadingPractice.description}
      </p>
    );
  }
}

export default ModalContent;
