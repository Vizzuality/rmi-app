import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
// styles
import styles from './legend-styles.scss';

class MapLegend extends PureComponent {
  static propTypes = {
    legendElements: PropTypes.arrayOf(
      PropTypes.shape({
        color: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        type: PropTypes.string
      })
    ).isRequired
  }

  static getItemColorClass({ type }) {
    return classnames({
      'legend-item-color': true,
      '-circle': type === 'circle'
    });
  }

  render() {
    const { legendElements } = this.props;

    return (
      <div className="c-legend">
        <style jsx>{styles}</style>
        {legendElements.map(legendElement => (
          <div className="legend-item" key={legendElement.color}>
            <div
              className={MapLegend.getItemColorClass(legendElement)}
              style={{ backgroundColor: legendElement.color }}
            />
            <div className="legend-item-name">{legendElement.label}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default MapLegend;
