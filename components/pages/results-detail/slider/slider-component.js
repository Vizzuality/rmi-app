import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Carousel from 'components/common/carousel';
import Select from 'components/common/select';
import MeasurementChartsItem from '../measurement-charts/measurement-charts-item';

// constants
import { SLIDER_OPTIONS } from './slider-constants';

// styles
import styles from './slider-styles.scss';

class SimpleSlider extends Component {
  static propTypes = { measurements: PropTypes.array }

  static defaultProps = { measurements: [] }

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

    const { measurements } = this.props;
    return (
      <div className="c-slider">
        <style jsx global>{styles}</style>
        <Carousel {...settings}>
          {measurements.map((measurement, index) => (
            <div key={measurement.id} className="col-xs-12 col-md-4">
              <MeasurementChartsItem
                data={measurement}
                actionPosition={index}
              />
            </div>
          ))}
        </Carousel>
        <div className="select-container">
          <Select
            placeholder="Selecte a mesurement area"
            options={SLIDER_OPTIONS}
            theme="light"
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
