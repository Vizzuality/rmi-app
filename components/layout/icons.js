import React, { PureComponent } from 'react';

class Icons extends PureComponent {
  render() {
    return (
      <svg aria-hidden="true" style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}>
        {/* go back large arrow */}
        <symbol id="icon-large-arrow" viewBox="0 0 106 32">
          <title>arrow</title>
          <path d="M104.6 17h-103.2c-0.6 0-1-0.4-1-1s0.4-1 1-1h103.2c0.6 0 1 0.4 1 1s-0.4 1-1 1z" />
          <path d="M15.8 31.6c-0.2 0-0.6 0-0.8-0.2l-14.4-14.6c-0.4-0.4-0.4-1 0-1.4l14.4-14.6c0.4-0.4 1-0.4 1.4 0s0.4 1 0 1.4l-13.6 13.8 13.6 13.8c0.4 0.4 0.4 1 0 1.4 0 0.2-0.4 0.4-0.6 0.4z" />
        </symbol>
        {/* search */}
        <symbol id="icon-search" viewBox="0 0 32 32">
          <title>search</title>
          <path d="M14.052 27.13c-7.235 0-13.078-5.843-13.078-13.078s5.843-13.078 13.078-13.078 13.078 5.843 13.078 13.078-5.843 13.078-13.078 13.078zM14.052 3.757c-5.704 0-10.296 4.591-10.296 10.296s4.591 10.296 10.296 10.296c5.704 0 10.296-4.591 10.296-10.296s-4.591-10.296-10.296-10.296z" />
          <path d="M29.635 31.026c-0.417 0-0.696-0.139-0.974-0.417l-7.374-7.374c-0.557-0.557-0.557-1.391 0-1.948s1.391-0.557 1.948 0l7.374 7.374c0.557 0.557 0.557 1.391 0 1.948-0.278 0.278-0.557 0.417-0.974 0.417z" />
        </symbol>
        {/* download */}
        <symbol id="icon-download" viewBox="0 0 32 32">
          <title>download</title>
          <path d="M16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zM10.4 11.771c0.114-0.229 0.343-0.343 0.571-0.343h10.057c0.229 0 0.457 0.114 0.686 0.343 0.114 0.229 0.114 0.571 0 0.686l-5.029 7.086c-0.114 0.229-0.343 0.343-0.571 0.343 0 0 0 0 0 0-0.229 0-0.457-0.114-0.571-0.343l-5.143-6.971c-0.114-0.229-0.114-0.571 0-0.8zM21.029 22.857h-10.057c-0.343 0-0.686-0.343-0.686-0.686s0.343-0.686 0.686-0.686h10.057c0.343 0 0.686 0.343 0.686 0.686s-0.343 0.686-0.686 0.686z" />
        </symbol>
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
