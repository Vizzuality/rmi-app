import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Carousel from 'components/common/carousel';
import Select from 'components/common/select';
import Bars from 'components/charts/barschart';

// constants
import { SLIDER_OPTIONS, CHART_CONFIG, OVERALL_CHARTS_TITLES } from './slider-constants';

// styles
import styles from './slider-styles.scss';

class SimpleSlider extends Component {
  static propTypes = { data: PropTypes.array }

  static defaultProps = { data: [] }

  constructor(props) {
    super(props);

    this.state = { selectedItem: 0 };
  }

  handleMeasurement = ({ value }) => { this.setState({ selectedItem: value }); };

  render() {
    const settings = {
      showArrows: false,
      selectedItem: this.state.selectedItem
    };
    const { data } = this.props;

    return (
      <div className="c-slider">
        <style jsx global>{styles}</style>
        <Carousel {...settings}>
          {data.map(d => (
            <div key={d.id} className="col-xs-12">
              <Bars
                config={CHART_CONFIG}
                data={d.children}
                customTooltip
              />
              <div className="legend-chart">
                <span className="legend-title">{OVERALL_CHARTS_TITLES[d.name]}</span>
              </div>
            </div>
          ))}
        </Carousel>
        <div className="select-container">
          <Select
            placeholder="Selecte a mesurement area"
            options={SLIDER_OPTIONS}
            selectedValue={this.state.selectedItem}
            onChange={this.handleMeasurement}
            className="-underline"
          />
        </div>
      </div>
    );
  }
}

export default SimpleSlider;
