import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

// components
import Legend from './legend';

// styles
import styles from './map-styles.scss';

class Map extends PureComponent {
  static propTypes = {
    paths: PropTypes.array.isRequired,
    setCountryColor: PropTypes.func.isRequired,
    legend: PropTypes.array.isRequired,
    onClickGeography: PropTypes.func
  }

  static defaultProps = {
    onClickGeography: () => {}
  }

  render() {
    const {
      paths, legend, setCountryColor, onClickGeography
    } = this.props;

    return (
      <div className="c-map">
        <style jsx>{styles}</style>
        <ComposableMap projection="winkel3">
          <Geographies geography={paths}>
            {(geographies, projection) => geographies.map(geography => (
              <Geography
                key={geography.properties.id}
                geography={geography}
                projection={projection}
                onClick={onClickGeography}
                style={{
                  default: {
                    fill: setCountryColor(geography.properties),
                    stroke: '#000',
                    strokeWidth: 0.25,
                    outline: 'none'
                  },
                  hover: {
                    fill: setCountryColor(geography.properties),
                    stroke: '#000',
                    strokeWidth: 0.25,
                    outline: 'none'
                  }
                }}
              />
            ))}
          </Geographies>
        </ComposableMap>
        <Legend legendElements={legend} />
      </div>
    );
  }
}

export default Map;
