import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import isEqual from 'lodash/isEqual';

// constants
import { STACKED_BAR_COLOURS, HOVER_COLOUR } from 'constants/graph-colors';
import { CHART_CONFIG } from './overall-chart-constants';

// actions
import { setSelectedCompany, resetSelectedCompany } from '../results-detail-actions';

// selectors
import { parseScores } from './overall-chart-selectors';

// components
import OverallChart from './overall-chart-component';

class OverallChartContainer extends PureComponent {
  static propTypes = {
    data: PropTypes.object.isRequired,
    setSelectedCompany: PropTypes.func.isRequired,
    resetSelectedCompany: PropTypes.func.isRequired
  }

  componentWillMount() {
    const { data } = this.props;
    const { slug } = data;

    this.chartConfig = {
      ...CHART_CONFIG,
      setBarFill: ({ dataKey, selected }) =>
        (selected ? HOVER_COLOUR : STACKED_BAR_COLOURS[slug][dataKey]),
      barOnMouseOver: this.onMouseOver,
      barChartOnMouseLeave: this.onMouseOut
    };
  }

  componentWillReceiveProps(nextProps) {
    const { data } = this.props;
    const { data: nextData } = nextProps;

    const dataChanged = !isEqual(data, nextData);

    if (dataChanged) {
      const { slug } = nextData;

      this.chartConfig = {
        ...this.chartConfig,
        setBarFill: ({ dataKey, selected }) =>
          (selected ? HOVER_COLOUR : STACKED_BAR_COLOURS[slug][dataKey])
      };
    }
  }

  onMouseOver = ({ payload }) => {
    const { companyId } = payload;
    this.props.setSelectedCompany(companyId);
  }

  onMouseOut = () => this.props.resetSelectedCompany();

  render() {
    return (
      <OverallChart
        {...this.props}
        config={this.chartConfig}
      />
    );
  }
}

export default connect(
  state => ({
    data: parseScores(state),
    responsive: state.responsive
  }),
  {
    setSelectedCompany,
    resetSelectedCompany
  }
)(OverallChartContainer);
