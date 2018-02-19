import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// styles
import styles from './stacked-bars-styles.scss';

class StackedBars extends PureComponent {
  static propTypes = {
    data: PropTypes.object.isRequired,
    colors: PropTypes.array.isRequired
  }

  getBarAttributes(bar, index) {
    const { colors } = this.props;
    const { value } = bar;

    return {
      width: `${(value * 100) / 3}%`,
      backgroundColor: colors[index]
    };
  }

  renderBars(bars) {
    return (
      <div className="bar">
        <style jsx>{styles}</style>
        {bars.map((bar, index) => (
          <div
            key={bar.id}
            className="bar-node"
            style={this.getBarAttributes(bar, index)}
          />
        ))}
      </div>
    );
  }

  render() {
    const { data } = this.props;
    const { name, children } = data;

    return (
      <div className="c-stacked-bars">
        <style jsx>{styles}</style>
        <h3 className="title">{name}</h3>
        {this.renderBars(children)}
      </div>
    );
  }
}

export default StackedBars;
