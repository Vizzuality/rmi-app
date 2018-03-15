import React, { PureComponent } from 'react';
import { Link } from 'routes';
// components
import Button from 'components/common/button';

// styles
import styles from './index-page-styles.scss';

class IndexPage extends PureComponent {
  // TO-DO
  handleDownloadSummary = () => {}

  render() {
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
                  <Button
                    className="-white -round -big"
                    onClick={this.handleDownloadSummary}
                    disabled
                  >
                    Download Summary
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="section -dark intro">
          <div className="l-layout">
            <div className="row between-md">
              <div className="col-xs-12">
                <div className="text-section">
                  <h3 className="title">RMI assessment</h3>
                </div>
              </div>
              <div className="col-xs-12 col-md-5">
                <div className="text-section">
                  <p>The Responsible Mining Foundation shares the position of many organisations and
                    people around the world who support responsible mining but are
                    concerned about the many urgent and competing matters that impact
                    societies and environments in producing countries. Mining is a significant
                    contributor to the GDP and exports of many low-and middle-income economies.
                    However, the one-time removal of these non-renewable
                    resources has often failed to catalyse economic growth, and for
                    too many people and too many environments, mining brings lasting
                    disruptive consequences. We support every effort by mining companies
                    to contribute to broad-based economic development, and avoid, manage and
                    mitigate negative impacts and legacies.
                  </p>
                  <p>The Responsible Mining Index (RMI) supports the principle that
                    minerals and metals mining should positively benefit the economies,
                    improve the lives of people and respect the environments of producing
                    countries, while also benefiting mining companies in a fair and viable way.
                  </p>
                  <p>With this in mind, the specific goal of RMI is to encourage continuous
                    improvement in responsible mining across the industry by transparently
                    assessing the policies and practices of large, geographically dispersed
                    mining companies on a range of economic, environmental, social and
                    governance (EESG) issues, and highlighting leading practice. RMI assesses
                    companies from the perspective of what society can reasonably expect of
                    large-scale mining companies, and examines the extent to which companies
                    are addressing a range of EESG issues in a systematic manner across an
                    their mining activities and throughout the project lifecycle. The Index
                    focuses largely on company-wide behaviour, while also looking at site-level
                    actions, in order to provide a snapshot of information disaggregated to the
                    level of individual mining operations.
                  </p>

                  <img src="/static/images/analytical_framework.svg" alt="RMI Analytical Framwork" />
                </div>
              </div>
              <div className="col-xs-12 col-md-5">
                <div className="text-section">
                  <p>This first Index, RMI 2018, covers 30 companies from 16 home countries,
                    including publicly-listed, state-owned and private companies.
                  </p>
                  <p>These companies operate in more than 700 sites in over 40 producing countries.
                    The assessment covers most mined commcdities, excluding of and gas.
                    The assessment also focuses on 127 mine sites located in countries
                    with low-income or lower-middle-income economies or high levels of inequality.
                  </p>
                  <p>The RMI assessment is based on publicly available information on these
                    companies and mine sites. As an evidence-based assessment, the Index
                    measures the extent to which companies can demonstrate, rather than
                    simply claim, that they have established responsible policies
                    and practices.
                  </p>

                  <h3 className="title">Findings in context</h3>
                  <p>Over recent decades, many large-scale mining companies have shown significant
                    improvements in how they manage EESG issues, as evidenced by the introduction
                    of innovative practices and the engagement with partners and multi-stakeholder
                    initiatives on responsible mining. Yet the RMI results indicate that it is
                    still hard to find evidence of systematic, effective action on the range of
                    topics that society can reasonably expect companies to address.
                  </p>
                  <p>Collectively however, companies have proven that it can be done. If one
                    company were to attain the highest scores seen for each assessment
                    point in the Index, it would reach an overall score of over 70%.
                    Many companies have demonstrated that they are establishing responsible
                    policies and practices on some issues, and examples of leading practice
                    have been found across a wide range of topics. The range of companies that
                    are among the stronger performers for RMI&apos;s different thematic
                    areas indicates that performance does not depend on company size,
                    commodity focus, or geographic presence.
                  </p>
                  <p>RMI commends the thoughtful and innovative approaches to leading practice,
                    and the efforts of many companies to address the range of economic,
                    environmental, social and governance issues covered in this report.
                    Our intention is that this will inspire more companies to follow responsible
                    practice and encourage the companies in this report to maintain their
                    efforts on continuous improvement.
                  </p>
                </div>

                <div className="buttons-container">
                  <Button className="-red -round">
                    <Link
                      route="results"
                    >
                      <a href="#">Go to Results</a>
                    </Link>
                  </Button>

                  <Button
                    className="-white -round"
                    onClick={this.handleDownloadSummary}
                    disabled
                  >
                    Download Summary
                  </Button>
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
