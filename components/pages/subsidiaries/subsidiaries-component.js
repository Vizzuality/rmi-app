import React, { PureComponent } from 'react';

// components
import SubsidiariesFilters from './subsidiaries-filters';
import SubsidiariesTable from './subsidiaries-table';

class Subsidiaries extends PureComponent {
  render() {
    return (
      <div className="c-subsidiaries-page">
        <div className="page-intro">
          <div className="l-layout">
            <div className="row">
              <div className="col-xs-12 col-md-5">
                <h2 className="title">Search by subsidiary</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="page-content">
          <section className="section -gray">
            <div className="l-layout">
              <div className="row">
                <div className="col-xs-12">
                  <SubsidiariesFilters />
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12">
                  <SubsidiariesTable />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Subsidiaries;
