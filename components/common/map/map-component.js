import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { ComposableMap, ZoomableGroup, Geographies, Geography, Markers } from 'react-simple-maps';
import { PatternLines } from '@vx/pattern';
import tooltip from "wsdm-tooltip";

// components
import Legend from './legend';

// helpers
import { createMarker } from './map-helpers';

// styles
import styles from './map-styles.scss';

class Map extends PureComponent {
  static propTypes = {
    paths: PropTypes.array.isRequired,
    markers: PropTypes.array,
    setCountryColor: PropTypes.func.isRequired,
    legend: PropTypes.array.isRequired,
    onClickGeography: PropTypes.func
  }

  static defaultProps = {
    markers: [],
    onClickGeography: () => {}
  }

  componentDidMount() {
    this.tip = tooltip();
    this.tip.create();
  }

  handleMove = (geography, evt) => {
    const x = evt.clientX;
    const y = evt.clientY + window.pageYOffset;

    this.tip.show(`<div>${geography.properties.NAME}</div>`);
    this.tip.position({ pageX: x, pageY: y });
  }

  handleMoveMarker = (marker, evt) => {
    const x = evt.clientX;
    const y = evt.clientY + window.pageYOffset;

    this.tip.show(`<div>${marker.name}</div>`);
    this.tip.position({ pageX: x, pageY: y });
  }

  handleLeave = () => { this.tip.hide(); }

  renderMarkers() {
    return this.props.markers.map(marker =>
      createMarker(marker, this.handleMoveMarker, this.handleLeave));
  }

  render() {
    const { paths, legend, setCountryColor, onClickGeography } = this.props;
    const markers = this.renderMarkers();

    return (
      <div className="c-map">
        <style jsx>{styles}</style>
        <ComposableMap
          projection="winkel3"
          defs={
            <PatternLines
              id="lines"
              height={8}
              width={8}
              stroke="#4ec1c2"
              background="#4a5972"
              strokeWidth={2}
              orientation={['diagonal']}
            />
          }
        >
          <ZoomableGroup disablePanning zoom={1.13}>
            <Geographies geography={paths} disableOptimization>
              {(geographies, projection) => geographies.map(geography => (
                <Geography
                  key={geography.properties.id}
                  geography={geography}
                  projection={projection}
                  onClick={geography.properties.isClickable ? onClickGeography : undefined}
                  onMouseMove={this.handleMove}
                  onMouseLeave={this.handleLeave}
                  style={{
                    default: {
                      fill: setCountryColor(geography.properties),
                      stroke: geography.properties.isSelected ? '#f2f2f2' : '#000',
                      strokeWidth: geography.properties.isSelected ? 0.55 : 0.25,
                      outline: 'none',
                      cursor: geography.properties.isClickable ? 'pointer' : 'default'
                    },
                    hover: {
                      fill: setCountryColor(geography.properties),
                      stroke: geography.properties.isClickable ? '#f2f2f2' : '#000',
                      strokeWidth: geography.properties.isClickable ? 0.55 : 0.25,
                      outline: 'none',
                      cursor: geography.properties.isClickable ? 'pointer' : 'default'
                    },
                    pressed: {
                      fill: setCountryColor(geography.properties),
                      stroke: 'inherit',
                      strokeWidth: 0.55,
                      outline: 'none'
                    }
                  }}
                />
              ))}
            </Geographies>
            <Markers>
              {markers}
            </Markers>
          </ZoomableGroup>
        </ComposableMap>
        <div className="legend-container">
          <Legend legendElements={legend} />
        </div>
      </div>
    );
  }
}

export default Map;
