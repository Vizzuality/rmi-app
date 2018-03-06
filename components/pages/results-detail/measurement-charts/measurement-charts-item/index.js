import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import isEqual from 'lodash/isEqual';

// actions
import { setSelectedCompany, resetSelectedCompany } from 'components/pages/results-detail/results-detail-actions';

// constants
import { HOVER_COLOUR } from 'constants/graph-colors';
import { CHART_CONFIG, MEASUREMENT_AREAS_COLOURS } from './measurement-charts-item-constants';

// component
import MeasurementChartsItem from './measurement-charts-item-component';

class MeasurementChartsItemContainer extends PureComponent {
  static propTypes = {
    data: PropTypes.object.isRequired,
    actionPosition: PropTypes.number.isRequired,
    setSelectedCompany: PropTypes.func.isRequired,
    resetSelectedCompany: PropTypes.func.isRequired
  }

  componentWillMount() {
    const { data, actionPosition } = this.props;
    const { indicatorSlug } = data;

    this.chartConfig = {
      ...CHART_CONFIG,
      setBarFill: ({ selected }) => (selected ?
        HOVER_COLOUR : MEASUREMENT_AREAS_COLOURS[indicatorSlug][actionPosition]),
      barOnMouseOver: this.onMouseOver,
      barChartOnMouseLeave: this.onMouseOut
    };
  }

  componentWillReceiveProps(nextProps) {
    const { data } = this.props;
    const { data: nextData, actionPosition } = nextProps;

    const dataChanged = !isEqual(data, nextData);

    if (dataChanged) {
      const { indicatorSlug } = nextData;

      this.chartConfig = {
        ...this.chartConfig,
        setBarFill: ({ selected }) => (selected ?
          HOVER_COLOUR : MEASUREMENT_AREAS_COLOURS[indicatorSlug][actionPosition])
      };
    }
  }

  onMouseOver = ({ payload }) => {
    const { companyId } = payload;
    this.props.setSelectedCompany(companyId);
  }

  onMouseOut = () => this.props.resetSelectedCompany();

  render() {
    const { data } = this.props;

    return (
      <MeasurementChartsItem
        data={data}
        config={this.chartConfig}
      />
    );
  }
}

export default connect(
  () => ({}),
  {
    setSelectedCompany,
    resetSelectedCompany
  }
)(MeasurementChartsItemContainer);
