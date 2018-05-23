import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HeadNext from 'next/head';

// actions
import { setLanguages, setLanguagesLoading, setCurrentLanguage } from 'modules/language/languages-actions';

// Styles
class Head extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    originalUrl: PropTypes.string,
    root: PropTypes.string.isRequired,
    setLanguages: PropTypes.func.isRequired,
    setLanguagesLoading: PropTypes.func.isRequired
  }

  static defaultProps = { originalUrl: null }

  componentDidMount() {
    const script = document.createElement('script');
    script.onload = () => {
      Transifex.live.onFetchLanguages((languages) => {
        this.props.setLanguages(languages);
        this.props.setLanguagesLoading(false);
      });

      window.Transifex.live.getAllLanguages();
    };
    script.src = '//cdn.transifex.com/live.js';
    document.getElementsByTagName('head')[0].appendChild(script);
  }

  render() {
    const { title, description, root } = this.props;
    const isFoundation = root !== 'index';
    const originalUrl = this.props.originalUrl || window.location.pathname;

    return (
      <HeadNext>
        <title>{title} | RMI - Responsible Mining Index 2018</title>

        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Vizzuality" />

        {/* Favicon */}
        <link rel="apple-touch-icon" sizes="57x57" href="/static/favicon/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/static/favicon/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/static/favicon/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/static/favicon/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/static/favicon/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/static/favicon/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/static/favicon/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/static/favicon/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/static/favicon/apple-icon-180x180.png" />
        <link rel="mask-icon" href="/static/favicon/safari-pinned-tab.svg" color="#ffffff" />
        <link rel="icon" type="image/png" sizes="192x192" href="/static/favicon/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/static/favicon/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/static/favicon/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/static/favicon/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />

        {/* Social media sharing  */}
        {!isFoundation &&
          <Fragment>
            <meta property="og:title" content={`${title} | RMI - Responsible Mining Index 2018`} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content="http://rmi.vizzuality.com/static/images/homepage_background.jpg" />
          </Fragment>
        }

        {isFoundation &&
          <Fragment>
            <meta property="og:title" content={title} />
            <meta
              property="og:description"
              content="Encouraging continuous improvement in
                responsible mining in the minerals and metals industry by transparently assessing the
                performance of mining companies, highlighting leading practice and supporting learning"
            />
            <meta property="og:image" content="http://rmi.vizzuality.com/static/images/rmf-social-og.png" />

          </Fragment>
        }

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:url" content={originalUrl} />

        {/* Styles and scripts */}
        <link href="https://fonts.googleapis.com/css?family=Yantramanav:300,400,500" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Bitter" rel="stylesheet" />

        {/* Analytics */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              var _paq = _paq || [];
              /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
              _paq.push(['trackPageView']);
              _paq.push(['enableLinkTracking']);
              (function() {
                var u="${process.env.ANALYTICS_URL}";
                _paq.push(['setTrackerUrl', u+'piwik.php']);
                _paq.push(['setSiteId', '1']);
                var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
                g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
              })();`
          }}
        />

        {/* Transifex */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              window.liveSettings={
                api_key: "${process.env.TRANSIFEX_API_KEY}",
                detectlang: true,
                staging: ${process.env.TRANSIFEX_STAGING || false}
              }`
          }}
        />

        <script src="https://cdn.polyfill.io/v2/polyfill.min.js" />
      </HeadNext>
    );
  }
}

export default connect(
  state => ({
    originalUrl: state.routes.originalUrl,
    root: state.routes.root
  }),
  {
    setLanguages,
    setLanguagesLoading,
    setCurrentLanguage
  }
)(Head);
