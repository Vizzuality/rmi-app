import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// styles
import styles from './scores-list-styles.scss';

class ScoresList extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    headers: PropTypes.array,
    data: PropTypes.array
  }

  static defaultProps = {
    title: null,
    headers: [],
    data: []
  }

  render() {
    const { title, headers, data } = this.props;

    return (
      <div className="c-scores-list">
        <style jsx>{styles}</style>
        {title && <h3 className="title">{title}</h3>}

        {!!headers.length &&
          <div className="list-headers-container">
            <ul className="list-headers">
              {headers.map(header => (
                <li
                  key={header.id}
                  className="list-headers-item"
                >
                  {header.name}
                </li>
              ))}
            </ul>
          </div>}

        <div className="list-content-container">
          <div className="list-content">
            {data.map(d => (
              <li
                key={d.id}
                className="list-content-item"
              >
                <div className="name">
                  <span>{d.name}</span>
                </div>
                <div className="value">
                  <span>{(d.value || '-').toLocaleString()}</span>
                </div>
              </li>
            ))}
            {!data.length &&
              <span className="unknown">Unknown</span>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default ScoresList;
