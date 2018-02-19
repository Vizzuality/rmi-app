import React, { PureComponent } from 'react';

class Icons extends PureComponent {
  render() {
    return (
      <svg aria-hidden="true" style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}>
        <defs>
          {/* pattern for testing. REMOVE */}
          <pattern id="pattern-hex" width="10" height="10" patternUnits="userSpaceOnUse">
            <polygon points="5,0 10,10 0,10" />
          </pattern>
        </defs>
      </svg>
    );
  }
}

export default Icons;
