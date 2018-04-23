import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'routes';
// components
import Button from 'components/common/button';

// styles
import styles from './index-page-styles.scss';

class IndexPage extends PureComponent {
  static propTypes = { currentLanguage: PropTypes.string.isRequired }

  // TO-DO
  handleDownloadSummary = () => {}

  render() {
    const { currentLanguage } = this.props;
    return (
      <div className="c-index-page">
        <style jsx>{styles}</style>
        {/* splash */}
        <div className="splash">
          <div className="l-layout">
            <div className="row center-xs">
              <div className="col-xs-12">
                <h1 className="title">Responsible Mining Index 2018</h1>
              </div>
            </div>
            <div className="row center-xs">
              <div className="col-xs-12 col-md-8">
                <p className="subtitle">An evidence-based assessment of mining company policies
                  and practices<br /> on economic, environmental, social and governance issues.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="download-summary">
          <div className="l-layout">
            <div className="row">
              <div className="col-xs-12">
                <div className="download-button-container">
                  <Link route="downloads">
                    <a
                      className="summary-link"
                      download
                    >
                      Download Summary
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="section -dark intro">
          <div className="l-layout">
            <div className="row between-md">
              <div className="col-xs-12 col-md-5">
                <div className="text-section">
                  <p>
                    The Responsible Mining Foundation (RMF) shares the position of many
                    organisations and people around the world who support responsible
                    mining but are concerned about the many urgent and compelling matters
                    that impact societies and environments in producing countries.
                  </p>
                  <p>
                    Mining is a significant contributor to the GDP and exports of many
                    low- and middle-income economies. As a sector with large-scale and
                    far-reaching potential, mining can also support achievement of the
                    UN Sustainable Development Goals. However, the one-time removal of
                    these non-renewable resources has often failed to catalyse economic
                    development, and for too many people and too many environments, mining
                    brings lasting disruptive consequences.
                  </p>
                  <p>
                    The Responsible Mining Index (RMI) supports the principle that minerals
                    and metals mining should benefit the economies, improve the lives of
                    people and respect the environments of producing countries, while also
                    benefiting mining companies in a fair and viable way.
                  </p>
                  <p>
                    With this in mind, the goal of RMI is to encourage continuous improvement
                    in responsible mining across the industry by transparently assessing the
                    policies and practices of large, geographically dispersed mining companies
                    on a range of economic, environmental, social and governance (EESG) issues,
                    with the emphasis on leading practice and learning.
                  </p>
                  <p>
                    RMI assesses companies from the perspective of what society can reasonably
                    expect of large-scale mining companies, and examines the extent to which
                    companies are addressing a range of EESG issues in a systematic manner across
                    all their mining activities and throughout the project lifecycle.
                  </p>
                  <p>
                    This first Index, RMI 2018, covers 30 companies from 16 home countries,
                    including publicly-listed, state-owned and private companies. These companies
                    operate more than 700 sites in over 40 producing countries, and the assessment
                    covers most mined commodities, excluding oil and gas. The Index focuses largely
                    on company-wide behaviour, while also looking at site-level actions at 127 mine
                    sites, in order to provide a snapshot of information disaggregated to the level
                    of individual mining operations.
                  </p>

                  <img src="/static/images/analytical_framework.svg" alt="RMI Analytical Framwork" />
                </div>
              </div>
              <div className="col-xs-12 col-md-5">
                <div className="text-section">
                  <p>
                    The RMI assessment is based on publicly available information on these companies
                    and mine sites. As an evidence-based assessment, the Index measures the extent
                    to which companies can demonstrate, rather than simply claim, that they have
                    established responsible policies and practices.
                  </p>

                  <h3 className="title">Findings in context</h3>
                  <p>
                    Over recent decades, many large-scale mining companies have shown significant
                    improvements in how they manage EESG issues, as evidenced by the introduction of
                    innovative practices and the engagement with partners and multi-stakeholder
                    initiatives on responsible mining. Yet the RMI results indicate that it is still
                    hard to find evidence of systematic, effective action at any one company on the
                    range of topics that society can reasonably expect companies to address.
                  </p>
                  <p>
                    Although the individual company results indicate that much more can be achieved,
                    the positive message is that it can be done. The RMI 2018 results show that if one
                    company were to attain all the highest scores achieved for every indicator, it would
                    reach over 70% of the maximum achievable score. This implies that existing best practice,
                    if systematically applied by all companies, could already go some way to meeting society expectations.
                  </p>
                  <p>
                    Many companies have demonstrated that they are establishing responsible policies and practices
                    on particular issues. The fact that 19 of the 30 assessed companies show up at least once among
                    the stronger performers in RMI’s different thematic areas, also indicates that performance does
                    not necessarily depend on company size, commodity focus, or geographic location.
                  </p>
                  <p>
                    RMI commends the thoughtful and innovative approaches to leading practice, and the efforts of
                    many companies to address the range of economic, environmental, social and governance issues
                    covered in this report.
                  </p>
                  <p>
                    The intention is that this report will provide learning and inspiration for more companies to
                    follow responsible practice, and encourage the companies in the 2018 Responsible Mining Index
                    to maintain their efforts on continuous improvement.
                  </p>
                </div>

                <div className="buttons-container">
                  <Button className="-red -round">
                    <Link
                      route="results"
                      params={{
                        language: currentLanguage,
                        section: 'overall'
                      }}
                    >
                      <a>Go to Results</a>
                    </Link>
                  </Button>

                  <a
                    href="/resources/RMI_2018_report-WEB.pdf"
                    className="summary-link"
                    download
                  >
                    Download Summary
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="splash-credits">
          <div className="l-layout">
            <div className="row">
              <div className="col-xs-12">
                <span className="credits">Photograph: Dean Hutton/Bloomberg/Getty Images</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default IndexPage;
