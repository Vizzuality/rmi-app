import React, { PureComponent } from 'react';
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
    setLanguages: PropTypes.func.isRequired,
    setLanguagesLoading: PropTypes.func.isRequired,
    setCurrentLanguage: PropTypes.func.isRequired
  }

  componentDidMount() {
    const script = document.createElement('script');
    script.onload = () => {
      Transifex.live.onFetchLanguages((languages) => {
        this.props.setLanguages(languages);
        this.props.setLanguagesLoading(false);
      });
      Transifex.live.onTranslatePage(languageCode => this.props.setCurrentLanguage(languageCode));
      window.Transifex.live.getAllLanguages();
    };
    script.src = '//cdn.transifex.com/live.js';
    document.getElementsByTagName('head')[0].appendChild(script);
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
                detectlang: true
              }`
          }}
        />

        <script src="https://cdn.polyfill.io/v2/polyfill.min.js" />
      </HeadNext>
    );
  }
}

export default connect(
  null,
  {
    setLanguages,
    setLanguagesLoading,
    setCurrentLanguage
  }
)(Head);
