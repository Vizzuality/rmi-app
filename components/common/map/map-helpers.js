import React from 'react';
import { feature } from 'topojson-client';
import { Marker } from 'react-simple-maps';
import { Router } from 'routes';

// data
import topojson from './data/world-50m-topo.json';

// constants
import { MARKER_STYLES } from './map-constants';

export const paths = feature(
  topojson,
  topojson.objects[Object.keys(topojson.objects)[0]]
).features;

export const createMarker = (data = {}) => (
  <Marker
    key={data.id}
    marker={data}
    onClick={() => Router.pushRoute('mine-sites', { mineSite: data.id })}
    style={MARKER_STYLES}
  >
    <circle cx={0} cy={0} r={6} fill="#bf3132" stroke="rgba(0, 0, 0, .5)" strokeWidth={3} />
  </Marker>);

export default {
  paths,
  createMarker
};
