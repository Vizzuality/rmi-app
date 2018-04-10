import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// components
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap
} from 'react-google-maps';

class MineSiteSatelliteView extends PureComponent {
  static propTypes = { mineSite: PropTypes.object.isRequired }

  getMapOptions() {
    const { 'coord-x': lat, 'coord-y': lng } = this.props.mineSite;

    return ({
      defaultZoom: 14,
      defaultMapTypeId: google.maps.MapTypeId.SATELLITE,
      mapTypeControl: false,
      defaultCenter: { lat, lng },
      defaultOptions: {
        disableDefaultUI: true,
        zoomControl: true,
        zoomControlOptions: { position: google.maps.ControlPosition.TOP_RIGHT }
      }
    });
  }

  render() {
    return (
      <GoogleMap {...this.getMapOptions()} />
    );
  }
}

export default withScriptjs(withGoogleMap(MineSiteSatelliteView));
