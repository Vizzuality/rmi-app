import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import HeadNext from 'next/head';

// Styles
class Head extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }

  static getStyles() {
    return (
      <style dangerouslySetInnerHTML={{ __html: require('css/index.scss') }} />
    );
  }

  render() {
    const { title, description } = this.props;

    return (
      <HeadNext>
        <title>{title} | RMI - Responsible Mining Index</title>

        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Vizzuality" />

        {/* Favicon */}

        {/* Styles and scripts */}
        {Head.getStyles()}
        <link href="https://fonts.googleapis.com/css?family=Yantramanav:300,400,500" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Bitter" rel="stylesheet" />

        <script src="https://cdn.polyfill.io/v2/polyfill.min.js" />
      </HeadNext>
    );
  }
}

export default Head;
