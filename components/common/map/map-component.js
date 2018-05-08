import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { ComposableMap, ZoomableGroup, Geographies, Geography, Markers } from 'react-simple-maps';
import { PatternLines } from '@vx/pattern';
import tooltip from 'wsdm-tooltip';
import debounce from 'lodash/debounce';

// components
import Icon from 'components/common/icon';
import Legend from './legend';

// helpers
import { createMarker } from './map-helpers';

// constants
import { MAP_DEFAULT_OPTIONS } from './map-constants';

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

  constructor(props) {
    super(props);

    const { zoom, center } = MAP_DEFAULT_OPTIONS;

    this.state = {
      zoom,
      center
    };

    this.debouncedHandleMovedEnd = debounce(this.handleMoveEnd, 300);
  }

  componentDidMount() {
    this.tip = tooltip();
    this.tip.create();
  }

  componentWillUnmount() { this.tip.hide(); }

  handleMove = (geography, evt) => {
    const x = evt.clientX;
    const y = evt.clientY + window.pageYOffset;

    const { isClickable, isProducing } = geography.properties;

    if (!isClickable && !isProducing) return;

    this.tip.show(`<div>${geography.properties.NAME}</div>`);
    this.tip.position({ pageX: x, pageY: y });
  }

  handleMoveMarker = (marker, evt) => {
    const x = evt.clientX;
    const y = evt.clientY + window.pageYOffset;

    const markerStyles = 'text-align:center;font-size:18px;';

    this.tip.show(`<div style=${markerStyles}>
      ${marker.name}
      <p className="country-name">[${marker.country}]</p>
    </div>`);
    this.tip.position({ pageX: x, pageY: y });
  }

  handleLeave = () => { this.tip.hide(); }

  handleZoomIn = () => { this.setState({ zoom: this.state.zoom + 1 }); }

  handleResetZoom = () => {
    const { zoom, center } = MAP_DEFAULT_OPTIONS;
    this.setState({ zoom, center });
  }

  handleZoomOut = () => { this.setState({ zoom: this.state.zoom - 1 }); }

  handleMoveEnd = (center) => { this.setState({ center }); };

  renderMarkers() {
    return this.props.markers.map(marker =>
      createMarker(marker, this.handleMoveMarker, this.handleLeave));
  }

  render() {
    const { paths, legend, setCountryColor, onClickGeography } = this.props;
    const { minZoom, maxZoom } = MAP_DEFAULT_OPTIONS;
    const { zoom, center } = this.state;
    const markers = this.renderMarkers();
    const isZoomInDisabled = zoom === maxZoom;
    const isZoomOutDisabled = zoom === minZoom;

    return (
      <div className="c-map">
        <style jsx>{styles}</style>
        <div className="zoom-controls">
          <button onClick={this.handleZoomIn} disabled={isZoomInDisabled}>
            <Icon name="zoom-in" className="-small" />
          </button>
          <button onClick={this.handleZoomOut} disabled={isZoomOutDisabled}>
            <Icon name="zoom-out" className="-small" />
          </button>
          <button onClick={this.handleResetZoom}>
            <Icon name="reset" className="-small" />
          </button>
        </div>
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
          <ZoomableGroup
            center={center}
            zoom={zoom}
            onMoveEnd={this.debouncedHandleMovedEnd}
          >
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
